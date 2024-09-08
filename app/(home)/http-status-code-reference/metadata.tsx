import { Metadata } from "next"

export const metadata: Metadata = {
  title: "HTTP Status Code Reference | DevTools",
  description:
    "A handy reference tool for HTTP status codes. Quickly search and find information about various HTTP status codes.",
  keywords: [
    "HTTP status codes",
    "status code reference",
    "web development",
    "HTTP protocol",
    "developer tools",
  ],
  openGraph: {
    title: "HTTP Status Code Reference | DevTools",
    description:
      "A handy reference tool for HTTP status codes. Quickly search and find information about various HTTP status codes.",
    url: "https://www.devtools.tools/http-status-code-reference",
    siteName: "DevTools",
    images: [
      {
        url: "https://your-devtools-url.com/images/http-status-code-reference-og.jpg",
        width: 1200,
        height: 630,
        alt: "HTTP Status Code Reference Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTTP Status Code Reference | DevTools",
    description:
      "A handy reference tool for HTTP status codes. Quickly search and find information about various HTTP status codes.",
    images: [
      "https://your-devtools-url.com/images/http-status-code-reference-twitter.jpg",
    ],
    creator: "@yourtwitterhandle",
  },
}
