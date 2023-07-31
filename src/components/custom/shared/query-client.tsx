'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface TanStackQueryClientProviderProps {
	children: React.ReactNode
}

const client = new QueryClient()

export default function TanStackQueryClientProvider({
	children,
}: TanStackQueryClientProviderProps) {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
