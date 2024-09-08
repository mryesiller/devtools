import Link from "next/link"

const tools = [
  {
    name: "JSON Formatter",
    description: "Format and validate JSON data",
    href: "/json-formatter",
  },
  {
    name: "Hash Generator",
    description: "Generate MD5, SHA-1, SHA-256, and other hash types",
    href: "/hash-generator",
  },
  {
    name: "HTTP Status Code Reference",
    description: "Quick reference for HTTP status codes",
    href: "/http-status-code-reference",
  },
  {
    name: "IP Address Lookup",
    description: "Look up geographical information for IP addresses",
    href: "/ip-address-lookup",
  },
  {
    name: "Base64 Encoder/Decoder",
    description: "Encode or decode Base64 strings",
    href: "/base64",
  },
  {
    name: "Timestamp Converter",
    description:
      "Convert between Unix timestamps and readable date/time formats",
    href: "/timestamp-converter",
  },
  {
    name: "URL Encoder/Decoder",
    description: "Encode or decode URLs",
    href: "/url-encoder",
  },
  {
    name: "Color Converter",
    description: "Convert between color formats",
    href: "/color-converter",
  },
  {
    name: "Markdown Preview",
    description: "Preview Markdown in real-time",
    href: "/markdown-preview",
  },
  {
    name: "Regex Tester",
    description: "Test and debug regular expressions",
    href: "/regex-tester",
  },
]

export default function Home() {
  return (
    <div className="p-8 pb-20 sm:p-20">
      <h1 className="text-4xl font-bold mb-8 text-center">DevTools Hub</h1>
      <p className="text-xl text-center mb-12">
        Your one-stop shop for essential developer tools
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow"
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
