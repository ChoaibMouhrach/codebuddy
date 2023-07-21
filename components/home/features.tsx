import {
	GitFork,
	MessagesSquare,
	LayoutDashboard,
	Wrench,
	Lock,
	Server,
	Webhook,
} from 'lucide-react'
import styles from './features.module.css'
import { cn } from '@/lib/utils'
const featureList = [
	{
		key: 'sharing',
		title: 'Storage Resources',
		icon: <Server className="mb-5 h-8 w-8 text-amber-600" />,
		description:
			'ink-Up! Share, Collaborate, and Inspire - Unleash the Power of Seamless Resource Sharing.',
	},
	{
		key: 'webhooks',
		title: 'Webhooks integration',
		icon: <Webhook className="mb-5 h-8 w-8 text-amber-600" />,
		description:
			'Real-time Event Notifications - Receive instant updates and notifications about important events.',
	},
	{
		key: 'chats',
		title: 'Messaging and Meetings',
		icon: <MessagesSquare className="mb-5 h-8 w-8 text-amber-600" />,
		description:
			'Facilitate smooth and effective communication among team members, promoting collaboration and clarity.',
	},
	{
		key: 'encryption',
		title: 'End-to-end encryption',
		icon: <Lock className="mb-5 h-8 w-8 text-amber-600" />,
		description:
			'Protect sensitive information and maintain privacy by enabling end-to-end encryption for all communications within the system.',
	},
	{
		key: 'apps-integrations',
		title: 'Third Party Integrations',
		icon: <GitFork className="mb-5 h-8 w-8 text-amber-600" />,
		description:
			'Seamlessly connect with a variety of external tools and services, extending functionality and enhancing productivity.',
	},
	{
		key: 'sdk',
		title: "CodeBuddy's SDK",
		icon: <Wrench className="mb-5 h-8 w-8 text-amber-600" />,
		description:
			"Unlock the Developer's Arsenal - CodeBuddy SDK Empowering You to Create, Innovate, and Extend the Platform to Your Imagination's Limit.",
	},
]

const Features = () => {
	return (
		<section id="features" className="relative mx-auto mt-16 max-w-7xl">
			<div className="grid grid-cols-[unset]  md:grid-cols-3 ">
				{featureList.map(({ key, title, icon, description }) => {
					return (
						<div
							className={cn(
								'relative space-x-3 px-9 pb-8 pt-6 duration-500 ease-linear',
								styles['features-card'],
							)}
							key={key}
						>
							{icon}
							<h3 className="mb-1 text-base font-semibold text-white">
								{title}
							</h3>
							<div className="text-gray-400">{description}</div>
						</div>
					)
				})}
			</div>
			<div className={cn('hidden md:block', styles['features-gridlines'])}>
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</section>
	)
}

export default Features
