import Providers from "@/components/Providers"
import { ThemeToggle } from "@/components/theme-toggle"
import React from "react"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers
      themeProps={{
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
        disableTransitionOnChange: true,
      }}
    >
      <div className="min-h-screen bg-background">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">DevTools Hub</h1>
            <ThemeToggle />
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevTools Hub. All rights reserved.
        </footer>
      </div>
    </Providers>
  )
}
