'use client'

import { FaGithubAlt } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { Input } from '@/components/ui/input'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { CardContent, CardFooter } from '@/components/ui/card'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'

const schema = z.object({
	email: z.string().email(),
})

type TData = z.infer<typeof schema>

interface AuthFormProps {
	formType: 'sign-in' | 'sign-up'
}

export default function AuthForm({ formType }: AuthFormProps) {
	const [isLoading, setIsLoading] = useState(false)
	const searchParams = useSearchParams()
	const { toast } = useToast()

	const form = useForm<TData>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
		},
	})

	const onSubmit = async ({ email }: TData) => {
		setIsLoading(true)
		const response = await signIn('email', {
			email,
			redirect: false,
			callbackUrl: searchParams.get('from') ?? '/dashboard',
		})

		if (!response) {
			setIsLoading(false)
			return
		}

		if (response.ok) {
			toast({
				title: 'Yaay!',
				description: 'Check your email for the sign in link',
			})
		} else {
			toast({
				title: 'Oops!',
				description: response?.error,
				variant: 'destructive',
			})
		}

		setIsLoading(false)
	}

	const handleGithub = () => {
		signIn('github', {
			callbackUrl: searchParams.get('from') ?? '/dashboard',
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<CardContent className="flex flex-col gap-6">
					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input {...field} placeholder="example@example.com" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button className="w-full" isLoading={isLoading}>
						Sign In
					</Button>
				</CardContent>
				<CardFooter className="flex flex-col items-stretch gap-6">
					<div className="flex items-center gap-4 ">
						<Separator className="flex-1 shrink" />
						<p className="text-sm text-muted-foreground">OR SIGN IN WITH</p>
						<Separator className="flex-1 shrink" />
					</div>
					<Button type="button" variant="outline" onClick={handleGithub}>
						{' '}
						<FaGithubAlt className="mr-2" /> Github
					</Button>
					{formType === 'sign-in' ? (
						<p className="text-center text-sm text-muted-foreground">
							Don&apos;t have an account ?{' '}
							<Link href="/sign-up" className="text-white">
								Sign Up
							</Link>
						</p>
					) : (
						<p className="text-center text-sm text-muted-foreground">
							Alreadt have an account ?{' '}
							<Link href="/sign-in" className="text-white">
								Sign In
							</Link>
						</p>
					)}
				</CardFooter>
			</form>
		</Form>
	)
}
