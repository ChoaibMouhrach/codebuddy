import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
	async req => {
		const isAuth = Boolean(await getToken({ req }))
		const isAuthPage = ['/sign-in', '/sign-up'].includes(req.nextUrl.pathname)

		if (isAuthPage) {
			if (isAuth) {
				return NextResponse.redirect(new URL('/dashboard', req.url))
			}

			return null
		}

		if (!isAuth) {
			let from = req.nextUrl.pathname

			if (req.nextUrl.search) {
				from += req.nextUrl.search
			}

			return NextResponse.redirect(
				new URL(`/sign-in?from=${encodeURIComponent(from)}`, req.url),
			)
		}
	},
	{
		callbacks: {
			authorized: () => {
				return true
			},
		},
	},
)

export const config = {
	matcher: ['/dashboard/:path*', '/sign-in', '/sign-up'],
}
