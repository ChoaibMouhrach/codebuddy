import NavBar from "@/components/custom/private/dashboard/nav-bar";
import SideBar from "@/components/custom/private/dashboard/side-bar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="w-screen h-screen grid grid-cols-8" >
      <SideBar />
      <div className="col-start-2 col-end-9 h-screen p-4 flex flex-col gap-4" >
        <NavBar />
        <div className="h-[calc(100vh_-_112px)] shrink-0 bg-card rounded-md p-4" >
          {children}
        </div>
      </div>
    </main>
  )
}
