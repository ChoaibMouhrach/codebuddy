import { inter, satoshi } from '@/styles/fonts'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/toaster'
import NextProgressBar from '@/components/custom/shared/next-progress-bar'
import TanStackQueryClientProvider from '@/components/custom/shared/query-client'
import SessionWrapper from '@/components/custom/shared/session-wrapper'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className={cn(satoshi.variable, inter.variable)}>
        <SessionWrapper>
          <NextProgressBar />
          <TanStackQueryClientProvider>{children}</TanStackQueryClientProvider>
          <Toaster />
        </SessionWrapper>
      </body>
    </html>
  )
}
