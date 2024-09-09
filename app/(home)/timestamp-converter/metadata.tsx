import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Timestamp Converter | DevTools",
  description:
    "Convert between Unix timestamps and human-readable date/time formats with our easy-to-use online tool.",
  keywords: [
    "timestamp converter",
    "Unix timestamp",
    "date time conversion",
    "developer tools",
  ],
  openGraph: {
    title: "Timestamp Converter | DevTools",
    description:
      "Convert between Unix timestamps and human-readable date/time formats with our easy-to-use online tool.",
    url: "https://www.devtools.tools/timestamp-converter",
    siteName: "DevTools",
    images: [
      {
        url: "https://devtools.tools/images/timestamp-converter-og.jpg",
        width: 1200,
        height: 630,
        alt: "Timestamp Converter Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Timestamp Converter | DevTools",
    description:
      "Convert between Unix timestamps and human-readable date/time formats with our easy-to-use online tool.",
    images: ["https://devtools.tools/images/timestamp-converter-twitter.jpg"],
    creator: "@yourtwitterhandle",
  },
}
