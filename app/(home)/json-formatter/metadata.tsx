import { Metadata } from "next"

export const metadata: Metadata = {
  title: "JSON Formatter | DevTools",
  description:
    "Format, validate, and compare JSON data with our powerful online JSON tool. Features include JSON formatting, validation, diffing, and easy copying.",
  keywords: [
    "JSON formatter",
    "JSON validator",
    "JSON diff",
    "online JSON tool",
    "developer tools",
  ],
  openGraph: {
    title: "JSON Formatter | DevTools",
    description:
      "Format, validate, and compare JSON data with our powerful online JSON tool.",
    url: "https://www.devtools.tools/json-formatter",
    siteName: "DevTools",
    images: [
      {
        url: "https://your-devtools-url.com/images/json-formatter-og.png",
        width: 1200,
        height: 630,
        alt: "JSON Formatter Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  /* twitter: {
    card: "summary_large_image",
    title: "JSON Formatter | DevTools",
    description:
      "Format, validate, and compare JSON data with our powerful online JSON tool.",
    images: ["https://your-devtools-url.com/images/json-formatter-twitter.jpg"],
    creator: "@yourtwitterhandle",
  }, */
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}
