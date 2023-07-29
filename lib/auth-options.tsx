import { AuthOptions } from 'next-auth'
import config from './config'
import { PrismaAdapter } from '@auth/prisma-adapter'
import db from './db'
import GithubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import mailer from './mailer'

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

				if (response.rejected.length)
					throw new Error(JSON.stringify(response.rejected))
			},
		}),
	],
}

export default authOptions
