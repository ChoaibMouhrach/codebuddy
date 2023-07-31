'use client'

import { AppProgressBar } from 'next-nprogress-bar'

export default function NextProgressBar() {
	return (
		<AppProgressBar
			color="#f8fafc"
			options={{ showSpinner: false }}
			shallowRouting
		/>
	)
}
