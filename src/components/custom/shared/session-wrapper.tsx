"use client"

import { SessionProvider } from "next-auth/react";

interface SessionWrapperProps {
  children: React.ReactNode;
}

export default function SessionWrapper({ children }: SessionWrapperProps) {
  return <SessionProvider>{children}</SessionProvider>
}
