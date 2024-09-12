import { cn } from "@/lib/utils"
import Link from "next/link"

const tools = [
  {
    name: "Color Generator",
    description: "Generate and explore color palettes",
    href: "/color-generator",
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    name: "JSON Formatter",
    description: "Format and validate JSON data",
    href: "/json-formatter",
    color: "bg-green-100 dark:bg-green-900",
  },
  {
    name: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, and other hash types",
    href: "/hash-generator",
    color: "bg-yellow-100 dark:bg-yellow-900",
  },
  {
    name: "HTTP Status Code Reference",
    description: "Quick reference for HTTP status codes",
    href: "/http-status-code-reference",
    color: "bg-purple-100 dark:bg-purple-900",
  },
  {
    name: "IP Address Lookup",
    description: "Look up geographical information for IP addresses",
    href: "/ip-address-lookup",
    color: "bg-pink-100 dark:bg-pink-900",
  },
  {
    name: "Base64 Encoder/Decoder",
    description: "Encode or decode Base64 strings",
    href: "/base64",
    color: "bg-indigo-100 dark:bg-indigo-900",
  },
  {
    name: "Timestamp Converter",
    description:
      "Convert between Unix timestamps and readable date/time formats",
    href: "/timestamp-converter",
    color: "bg-red-100 dark:bg-red-900",
  },
  {
    name: "Regular Expression Tester (Regexp)",
    description: "Test and validate regular expressions",
    href: "/regexp-tester",
    color: "bg-orange-100 dark:bg-orange-900",
  },
]

export default function Home() {
  return (
    <div className="p-8 pb-20 sm:p-20">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Developer&apos;s Toolkit
      </h1>
      <p className="text-xl text-center mb-12">
        Unlock Your Development Potential with the Best Tools
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className={cn(
              "block p-6 rounded-lg transition-all",
              "hover:shadow-lg hover:scale-105",
              "border border-gray-200 dark:border-gray-700",
              "text-gray-900 dark:text-gray-100",
              tool.color
            )}
          >
            <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
