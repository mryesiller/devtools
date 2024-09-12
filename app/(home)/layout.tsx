import { Logo } from "@/components/logo"
import Providers from "@/components/Providers"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"
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
      <div className="flex flex-col min-h-screen bg-background">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="w-14 h-auto" />
              <span className="text-2xl font-bold">
                <span className="text-2xl font-bold">
                  <span className="text-orange-500">Dev</span>
                  <span className="text-black dark:text-white">Tools</span>
                </span>
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8 flex-1">{children}</main>
        <footer className="mt-auto border-t">
          <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-2 sm:mb-0">
              © {new Date().getFullYear()} DevTools. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center sm:justify-end space-x-4">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:underline"
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:underline"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:underline"
              >
                Terms
              </Link>
              <a
                href="https://github.com/mryesiller"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:underline"
              >
                @mryesiller
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </Providers>
  )
}
