import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BsArrowLeftShort } from 'react-icons/bs'

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<main className="relative flex h-screen w-screen items-center justify-center px-4 lg:px-0">
			{children}
			<Button className="absolute left-0 top-0 m-4" variant="secondary" asChild>
				<Link href="/" className="flex items-center gap-2">
					{' '}
					<BsArrowLeftShort className="text-lg" /> Home
				</Link>
			</Button>
		</main>
	)
}
