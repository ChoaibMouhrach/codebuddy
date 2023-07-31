import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function constructMetadata({
	title = 'CodeBuddy - collaboration platform',
	description = 'The platform is developer-friendly, providing an easy-to-use API for each project you create. This API simplifies the integration process and enhances the overall experience.',
	image = 'https://codebuddy.yeracode.com/_static/thumbnail.png',
	icons = '/favicon.ico',
}: {
	title?: string
	description?: string
	image?: string
	icons?: string
} = {}): Metadata {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: image,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [image],
			creator: '@codebuddy',
		},
		icons,
		metadataBase: new URL('https://codebuddy.yeracode.com'),
		themeColor: '#FFF',
	}
}
