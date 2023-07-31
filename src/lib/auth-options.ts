import { AuthOptions } from 'next-auth'
import config from './config'
import { PrismaAdapter } from '@auth/prisma-adapter'
import db from './db'
import GithubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import mailer from './mailer'
import { Role, Subscription, User } from '@prisma/client'

declare module 'next-auth' {
	interface Session {
		user: User & { subscription: Subscription; role: Role }
	}
}

const authOptions: AuthOptions = {
	// An issue arises where the adapter refuses to accept the value being passed to it,
	// and the exact reason remains unclear.
	adapter: PrismaAdapter(db) as never,
	secret: config.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
	providers: [
		GithubProvider({
			clientId: config.GITHUB_ID,
			clientSecret: config.GITHUB_SECRET,
		}),
		EmailProvider({
			sendVerificationRequest: async ({ identifier: email, url }) => {
				const response = await mailer.sendMail({
					from: config.SMTP_USER,
					to: email,
					subject: 'Sign in to your account',
					html: `<div><a href="${url}" >Sign In</a></div>`,
				})

				if (response.rejected.length) {
					throw new Error(JSON.stringify(response.rejected))
				}
			},
		}),
	],
	callbacks: {
		session: async ({ session }) => {
			session.user = (await db.user.findUnique({
				where: {
					email: session.user!.email!,
				},
				include: {
					subscription: true,
					role: true,
				},
			}))!

			return session
		},
		signIn: async ({ user, account }) => {
			const userExists = await db.user.findUnique({
				where: {
					email: user.email!,
				},
			})

			if (!userExists) {
				const member = (await db.role.findUnique({
					where: {
						name: 'member',
					},
				}))!

				const free = (await db.subscription.findUnique({
					where: {
						name: 'free',
					},
				}))!

				const dbUser = await db.user.create({
					data: {
						name: user.name,
						email: user.email!,
						image: user.image,
						roleId: member.id,
						subscriptionId: free.id,
					},
				})

				if (account) {
					await db.account.create({
						data: {
							...account,
							userId: dbUser.id,
						},
					})
				}
			}

			return true
		},
	},
}

export default authOptions
