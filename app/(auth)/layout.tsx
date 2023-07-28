interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="h-screen w-screen flex items-center justify-center px-4 lg:px-0" >
        {children}
    </main>
  )
}
