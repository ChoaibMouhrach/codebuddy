import Link from 'next/link'
import { BsFillCloudHaze2Fill } from 'react-icons/bs'

export default function Logo() {
	return (
		<Link href="/">
			<BsFillCloudHaze2Fill className="text-2xl" />
		</Link>
	)
}
