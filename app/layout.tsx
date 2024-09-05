import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: {
    default: "DevTools - A Collection of Developer Tools",
    template: "%s | DevTools",
  },
  description:
    "Comprehensive suite of developer tools to streamline your workflow and boost productivity.",
  keywords: [
    "developer tools",
    "web development",
    "coding",
    "productivity",
    "software engineering",
  ],
  authors: [{ name: "Goksel Yesiller" }],
  creator: "goksel yesiller",
  publisher: "mryesiller",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devtools.tools",
    title: "DevTools - A Collection of Developer Tools",
    description:
      "Comprehensive suite of developer tools to streamline your workflow and boost productivity.",
    siteName: "DevTools",
    images: [
      {
        url: "https://your-devtools-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevTools - A Collection of Developer Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevTools - A Collection of Developer Tools",
    description:
      "Comprehensive suite of developer tools to streamline your workflow and boost productivity.",
    images: ["https://your-devtools-url.com/twitter-image.jpg"],
    creator: "@yourTwitterHandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
