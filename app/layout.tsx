import { inter, satoshi } from '@/styles/fonts'
import './globals.css'
import { cn } from '@/lib/utils'
import NextProgressBar from '@/components/custom/common/next-progress-bar'
import { Toaster } from '@/components/ui/toaster'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="dark" >
      <body className={cn(satoshi.variable, inter.variable)}>
        <NextProgressBar />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
