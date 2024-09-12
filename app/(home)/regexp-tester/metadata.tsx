import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regular Expression Tester | DevTools",
  description:
    "Test and validate regular expressions with our online RegExp tester tool. Match patterns against custom text inputs.",
  keywords: [
    "regular expression",
    "regex tester",
    "regexp validator",
    "pattern matching",
    "developer tools",
  ],
  openGraph: {
    title: "Regular Expression Tester | DevTools",
    description:
      "Test and validate regular expressions with our online RegExp tester tool.",
    url: "https://www.devtools.tools/regexp-tester",
    siteName: "DevTools",
    images: [
      {
        url: "https://www.devtools.tools/images/regexp-tester-og.png",
        width: 1200,
        height: 630,
        alt: "Regular Expression Tester Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  /* twitter: {
    card: "summary_large_image",
    title: "Regular Expression Tester | DevTools",
    description: "Test and validate regular expressions with our online RegExp tester tool.",
    images: ["https://www.devtools.tools/images/regexp-tester-twitter.jpg"],
    creator: "@yourtwitterhandle",
  }, */
}
