import NavBar from '@/components/custom/public/nav-bar'
import authOptions from '@/lib/auth-options'
import { getServerSession } from 'next-auth'

export default async function Page() {
	const session = await getServerSession(authOptions)

	return (
		<div>
			<NavBar user={session?.user} />
			<h1>Home</h1>
		</div>
	)
}
