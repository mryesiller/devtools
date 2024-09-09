import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hash Generator | DevTools",
  description:
    "Generate MD5, SHA-1, SHA-256, and other hash types with our online hash generator tool.",
  keywords: [
    "hash generator",
    "MD5",
    "SHA-1",
    "SHA-256",
    "online hash tool",
    "developer tools",
  ],
  openGraph: {
    title: "Hash Generator | DevTools",
    description:
      "Generate various types of hashes with our online hash generator tool.",
    url: "https://www.devtools.tools/hash-generator",
    siteName: "DevTools",
    images: [
      {
        url: "https://www.devtools.tools/images/hash-generator-og.png",
        width: 1200,
        height: 630,
        alt: "Hash Generator Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  /*  twitter: {
    card: "summary_large_image",
    title: "Hash Generator | DevTools",
    description:
      "Generate various types of hashes with our online hash generator tool.",
    images: ["https://www.devtools.tools/images/hash-generator-twitter.jpg"],
    creator: "@yourtwitterhandle",
  }, */
}
