import Logo from '@/components/custom/shared/logo'
import AvatarDropDown from '@/components/custom/shared/avatar-dropdown'
import { Button } from '@/components/ui/button'
import { MdOutlineMenu } from 'react-icons/md'
import React from 'react'

interface NavBarProps {
	isSideBarOpen: boolean
	setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavBar({
	isSideBarOpen,
	setIsSideBarOpen,
}: NavBarProps) {
	return (
		<nav className="flex h-16 shrink-0 items-center justify-between rounded-md bg-card px-4">
			<div className="flex items-center gap-4">
				<Button
					className="lg:hidden"
					variant="ghost"
					onClick={() => setIsSideBarOpen(!isSideBarOpen)}
				>
					<MdOutlineMenu className="text-lg" />
				</Button>
				<Logo />
			</div>
			<AvatarDropDown />
		</nav>
	)
}
