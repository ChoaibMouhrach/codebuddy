import Background from '@/components/home/background'

interface LayoutProps {
	children: React.ReactNode
}

export const metadata = {
	title: 'Sign in - CodeBuddy',
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="flex h-screen w-screen justify-center">
			<Background />
			{children}
		</div>
	)
}
