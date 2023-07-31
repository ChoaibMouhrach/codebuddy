import DeleteAccount from '@/components/custom/dashboard/profile/delete-account'
import UpdateProfile from '@/components/custom/dashboard/profile/update-info'
import authOptions from '@/lib/auth-options'
import { getServerSession } from 'next-auth'

export default async function Profile() {
	const session = (await getServerSession(authOptions))!

	return (
		<>
			<UpdateProfile user={session.user} />
			<DeleteAccount />
		</>
	)
}
