"use client"

import Logo from "@/components/custom/common/logo";
import AvatarDropDown from "../../common/avatar-dropdown";

export default function NavBar() {
  return (
    <nav className="h-16 bg-card rounded-md shrink-0 flex items-center justify-between px-4" >
      <Logo />
      <AvatarDropDown />
    </nav>
  )
}
