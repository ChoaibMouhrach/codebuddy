import { inter, satoshi } from '@/styles/fonts'
import './globals.css'
import { cn } from '@/lib/utils'
import Background from '@/components/home/background'


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={cn(satoshi.variable, inter.variable)}>
				{children}
				<Background />
			</body>
		</html>
	)
}
