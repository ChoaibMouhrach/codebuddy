import { getServerSession } from 'next-auth'
import authOptions from '@/lib/auth-options'
import Logo from '../shared/logo';
import AvatarDropDown from '../shared/avatar-dropdown';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function NavBar() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="flex h-16 items-stretch">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4 text-sm">
          {session ? (
            <AvatarDropDown />
          ) : (
            <Button asChild size="sm">
              <Link href="/sign-in">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
