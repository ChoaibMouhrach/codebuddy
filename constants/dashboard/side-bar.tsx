import { IconType } from 'react-icons'
import {
	MdOutlineDashboard,
	MdWorkOutline,
	MdOutlinePerson,
} from 'react-icons/md'

interface Navigation {
	name: string
	icon: IconType
	href: string
}

type Navigations = Navigation[]

export const navigations: Navigations = [
	{
		name: 'Dashboard',
		icon: MdOutlineDashboard,
		href: '/dashboard',
	},
	{
		name: 'WorkSpaces',
		icon: MdWorkOutline,
		href: '/dashboard/workspaces',
	},
	{
		name: 'Profile',
		icon: MdOutlinePerson,
		href: '/dashboard/profile',
	},
]

export const workspaces = [
	{
		name: 'WorkSpace 1',
		href: '/dashboard/workspaces/1',
	},
	{
		name: 'WorkSpace 2',
		href: '/dashboard/workspaces/2',
	},
]
