"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../common/logo";
import AvatarDropDown from "../common/avatar-dropdown";

interface NavBarProps {
  user?: Partial<{
    name: string | null;
    email: string | null;
    image: string | null;
  }>
}

export default function NavBar({ user }: NavBarProps) {
  return (
    <nav className="h-16 flex items-stretch" >
      <div className="container flex items-center justify-between" >
        <Logo />
        <div className="flex items-center gap-4 text-sm" >
          {
            user ? (
              <AvatarDropDown />
            ) : (
              <Button asChild size="sm" >
                <Link href="/sign-in" >
                  Sign In
                </Link>
              </Button>
            )
          }
        </div>
      </div>
    </nav>
  )
}
