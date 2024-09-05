import Link from "next/link"

const tools = [
  {
    name: "JSON Formatter",
    description: "Format and validate JSON data",
    href: "/json-formatter",
  },
  {
    name: "Base64 Encoder/Decoder",
    description: "Encode or decode Base64 strings",
    href: "/base64",
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
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">DevTools Hub</h1>
        <p className="text-xl text-center mb-12">
          Your one-stop shop for essential developer tools
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </main>

      <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} DevTools Hub. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  )
}
