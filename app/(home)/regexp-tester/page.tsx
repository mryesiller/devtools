import { RegexpTester } from "./RegexpTester"
import { metadata } from "./metadata"

export { metadata }

export default function RegexpTesterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Regular Expression Tester</h1>
      <p className="mb-6">
        Test and validate your regular expressions against custom text inputs.
      </p>
      <RegexpTester />
    </div>
  )
}
