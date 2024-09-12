"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const examples = [
  {
    name: "Email Validation",
    regexp: "[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}",
    description: "Matches most common email address formats.",
    testText:
      "valid.email@example.com\ninvalid.email@.com\nanother_valid_email123@sub.domain.co.uk\nnot_an_email.com",
  },
  {
    name: "URL Validation",
    regexp:
      "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)",
    description: "Matches URLs starting with http:// or https://.",
    testText:
      "https://www.example.com\nhttp://subdomain.example.co.uk/path/to/page?param=value\nftp://invalid.url.com\nhttps://valid-url.com/with_underscores\nwww.invalid-no-protocol.com",
  },
  {
    name: "Phone Number",
    regexp:
      "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",
    description:
      "Matches various phone number formats, including international.",
    testText:
      "+1 (555) 123-4567\n+44 20 7123 4567\n123-456-7890\n+1-555-123-4567\n12345\n+invalid-phone-number",
  },
]

export function RegexpTester() {
  const [regexp, setRegexp] = useState("")
  const [testText, setTestText] = useState("")
  const [matches, setMatches] = useState<string[]>([])

  function testRegexp() {
    try {
      const regex = new RegExp(regexp, "gm") // Added 'm' flag for multiline matching
      const foundMatches = testText.match(regex) || []
      setMatches(foundMatches)
    } catch (error) {
      console.error("Invalid regular expression:", error)
      setMatches([])
    }
  }

  function loadExample(example: (typeof examples)[0]) {
    setRegexp(example.regexp)
    setTestText(example.testText)
  }

  function clearInputs() {
    setRegexp("")
    setTestText("")
    setMatches([])
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Enter regular expression..."
        value={regexp}
        onChange={(e) => setRegexp(e.target.value)}
        className="w-full"
      />
      <Textarea
        placeholder="Enter text to test against..."
        value={testText}
        onChange={(e) => setTestText(e.target.value)}
        className="w-full"
      />
      <div className="flex space-x-2">
        <Button onClick={testRegexp}>Test</Button>
        <Button
          onClick={clearInputs}
          variant="destructive"
          aria-label="Clear input"
        >
          Clear
        </Button>
      </div>
      <div className="space-y-2 p-4 border-2 border-green-500 rounded-md">
        <div className="font-semibold">Matches:</div>
        {matches.length > 0 ? (
          <ul className="list-disc list-inside">
            {matches.map((match, index) => (
              <li key={index}>{match}</li>
            ))}
          </ul>
        ) : (
          <div>No matches found.</div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <div className="space-y-4">
          {examples.map((example, index) => (
            <div key={index} className="border p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">{example.name}</h3>
              <p className="mb-2">{example.description}</p>
              <p className="mb-2">
                <strong>RegExp:</strong> {example.regexp}
              </p>
              <p className="mb-2">
                <strong>Test Text:</strong> {example.testText}
              </p>
              <Button onClick={() => loadExample(example)}>Load Example</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
