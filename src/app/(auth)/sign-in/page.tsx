import AuthForm from '@/components/custom/auth/auth-form'

export default function Page() {
	return (
		<div className="z-10 mt-[calc(30vh)] h-fit w-full max-w-md overflow-hidden  backdrop-blur-lg sm:rounded-2xl sm:shadow-xl">
			<div className="flex flex-col items-center justify-center space-y-3 px-4 py-6 pt-8 text-center sm:px-16">
				<h3 className="text-xl font-semibold">Sign in to CodeBuddy</h3>
				<p className="text-sm text-gray-200">
					Start collaborating with your team.
				</p>
			</div>
			<div>
				<AuthForm formType="sign-in" />
			</div>
		</div>
	)
}
