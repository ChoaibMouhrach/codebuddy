import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="h-screen w-screen flex items-center justify-center px-4 lg:px-0 relative" >
      {children}
      <Button className="absolute top-0 left-0 m-8" variant="secondary" asChild >
        <Link href="/" className="flex items-center gap-2" > <BsArrowLeftShort className="text-lg" />  Home</Link>
      </Button>
    </main>
  )
}
