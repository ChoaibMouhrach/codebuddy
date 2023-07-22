import Features from '@/components/home/features'
import Footer from '@/components/home/footer'
import Hero from '@/components/home/hero'
import { constructMetadata } from '@/lib/utils'
import Image from 'next/image'

export const metadata = constructMetadata()

export default function Home() {
	return (
		<div className="h-screen">
			<header className="py-6 ">
				<Image
					width="50"
					height="50"
					src="./_static/logo.svg"
					alt="CodeBoddy Logo"
					className="absolute translate-x-1/2 rounded-full"
				/>
			</header>
			<Hero />
			<Features />
			<Footer />
		</div>
	)
}
