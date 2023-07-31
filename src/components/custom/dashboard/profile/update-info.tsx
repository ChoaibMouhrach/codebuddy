'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { User } from '@/interfaces/users'
import { useForm } from 'react-hook-form'

interface UpdateProfileProps {
	user: User
}

export default function UpdateProfile({ user }: UpdateProfileProps) {
	const form = useForm()

	const onSubmit = () => {}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Profile</CardTitle>
				<CardDescription>
					You can update your profile from here.
				</CardDescription>
			</CardHeader>
			<Separator />
			<Form {...form}>
				<form onClick={form.handleSubmit(onSubmit)}>
					<CardContent className="flex flex-col gap-4 py-4">
						<FormField
							name="name"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Full Name</FormLabel>
									<FormControl>
										<Input
											defaultValue={user.name}
											{...field}
											placeholder="John Doe"
										/>
									</FormControl>
									<FormDescription>
										Your full name will be displayed on your public profile.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							name="email"
							control={form.control}
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email Address</FormLabel>
									<FormControl>
										<Input
											defaultValue={user.email}
											{...field}
											placeholder="example@example.com"
										/>
									</FormControl>
									<FormDescription>
										Your email address will be displayed on your public profile.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/*
            <FormField
              name="picture"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profile Picture</FormLabel>
                  <FormControl>
                    <Input {...field} type="file" />
                  </FormControl>
                  <FormDescription>
                    Your profile picture will be displayed on your public
                    profile.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            */}
					</CardContent>
					<Separator />
					<CardFooter className="pt-6">
						<Button>Update Profile</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	)
}
