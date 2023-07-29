import { Button } from '@/components/ui/button'
import { MdAdd, MdWorkOutline } from 'react-icons/md'
import { LuSearch } from 'react-icons/lu'
import { Separator } from '@/components/ui/separator'
import { navigations, workspaces } from '@/constants/dashboard/side-bar'
import Link from 'next/link'
import { IconType } from 'react-icons'

export default function SideBar() {
	return (
		<div className="hidden min-w-[300px] shrink-0 flex-col gap-4 rounded-md bg-card p-4 lg:flex">
			<div className="flex h-10 items-stretch rounded-md border-input bg-background ring-2 ring-ring ring-offset-background">
				<div className="flex w-10 shrink-0 items-center justify-center">
					<LuSearch className="text-md" />
				</div>
				<input
					className="flex-1 bg-transparent outline-none"
					placeholder="Search"
				/>
			</div>
			<div className="flex items-center justify-between gap-4 px-2 text-sm text-muted-foreground">
				<p>Dashboard</p>
				<Separator className="shrink" />
			</div>
			{navigations.map(navigation => (
				<SideBarItem key={navigation.name} {...navigation} />
			))}
			<div className="flex items-center justify-between gap-4 px-2 text-sm text-muted-foreground">
				<p>WorkSpaces</p>
				<Separator className="shrink" />
			</div>
			{workspaces.map(workspace => (
				<SideBarItem
					key={workspace.href}
					size="sm"
					icon={MdWorkOutline}
					{...workspace}
				/>
			))}
			<Button className="justify-start gap-4" variant="ghost" size="sm">
				<MdAdd />
				<span>Add WorkSpace</span>
			</Button>
		</div>
	)
}

interface SideBarItemProps {
	size?: 'sm'
	href: string
	name: string
	icon: IconType
}

function SideBarItem({ size, href, name, icon: Icon }: SideBarItemProps) {
	return (
		<Button variant="ghost" size={size} asChild className="justify-start">
			<Link href={href} className="flex items-center gap-4">
				<Icon />
				<span>{name}</span>
			</Link>
		</Button>
	)
}
