import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "../common/logo";

export default function NavBar() {
  return (
    <nav className="h-16 flex items-stretch" >
      <div className="container flex items-center justify-between" >
        <Logo />
        <div className="flex items-center gap-4 text-sm" >
          <Link href="/dashboard" >Dashboard</Link>
          <Button asChild size="sm" >
            <Link href="/sign-in" >
              Sign In
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
