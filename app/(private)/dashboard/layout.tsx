'use client'

import NavBar from '@/components/custom/private/dashboard/nav-bar'
import SideBar from '@/components/custom/private/dashboard/side-bar'

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet'
import { useState } from 'react'

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	const [isSideBarOpen, setIsSideBarOpen] = useState(false)

	return (
		<>
			<main className="flex h-screen w-screen items-stretch gap-4 p-4">
				<SideBar />
				<div className="flex h-[calc(100vh_-_32px)] flex-1 flex-col gap-4">
					<NavBar
						isSideBarOpen={isSideBarOpen}
						setIsSideBarOpen={setIsSideBarOpen}
					/>
					<div className="h-[calc(100vh_-_112px)] shrink-0 rounded-md bg-card p-4">
						{children}
					</div>
				</div>
			</main>

			<Sheet
				onOpenChange={() => setIsSideBarOpen(!isSideBarOpen)}
				open={isSideBarOpen}
			>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Are you sure absolutely sure?</SheetTitle>
						<SheetDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</>
	)
}
