import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Color Generator | DevTools",
  description:
    "Generate and explore color palettes, hex codes, and RGB values with our online color generator tool.",
  keywords: [
    "color generator",
    "color palette",
    "hex code",
    "RGB values",
    "online color tool",
    "developer tools",
  ],
  openGraph: {
    title: "Color Generator | DevTools",
    description:
      "Create stunning color palettes and explore color codes with our online color generator tool.",
    url: "https://www.devtools.tools/color-generator",
    siteName: "DevTools",
    images: [
      {
        url: "https://www.devtools.tools/images/color-generator-og.png",
        width: 1200,
        height: 630,
        alt: "Color Generator Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  /*  twitter: {
    card: "summary_large_image",
    title: "Color Generator | DevTools",
    description:
      "Create stunning color palettes and explore color codes with our online color generator tool.",
    images: ["https://www.devtools.tools/images/color-generator-twitter.jpg"],
    creator: "@yourtwitterhandle",
  }, */
}
