'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function DeleteAccount() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Delete Account</CardTitle>
				<CardDescription>
					You can delete your account from here.
				</CardDescription>
			</CardHeader>
			<Separator />
			<CardFooter className="pt-6">
				<Button variant="danger">Delete Account</Button>
			</CardFooter>
		</Card>
	)
}
