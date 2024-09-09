import { Metadata } from "next"

export const metadata: Metadata = {
  title: "IP Address Lookup | DevTools",
  description:
    "Look up geographical information for any IP address using our IP Address Lookup tool.",
  keywords: [
    "IP address lookup",
    "geolocation",
    "IP information",
    "developer tools",
  ],
  openGraph: {
    title: "IP Address Lookup | DevTools",
    description:
      "Look up geographical information for any IP address using our IP Address Lookup tool.",
    url: "https://www.devtools.tools/ip-address-lookup",
    siteName: "DevTools",
    images: [
      {
        url: "https://your-devtools-url.com/images/ip-address-lookup-og.png",
        width: 1200,
        height: 630,
        alt: "IP Address Lookup Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  /*  twitter: {
    card: "summary_large_image",
    title: "IP Address Lookup | DevTools",
    description:
      "Look up geographical information for any IP address using our IP Address Lookup tool.",
    images: [
      "https://your-devtools-url.com/images/ip-address-lookup-twitter.jpg",
    ],
    creator: "@yourtwitterhandle",
  }, */
}
