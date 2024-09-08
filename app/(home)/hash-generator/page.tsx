import { HashGenerator } from "./HashGenerator"
import { metadata } from "./metadata"

export { metadata }

export default function HashGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hash Generator</h1>
      <p className="mb-6">
        Generate various types of hashes for your input text.
      </p>
      <HashGenerator />
    </div>
  )
}
