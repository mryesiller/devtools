"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Change, diffJson } from "diff"
import { useState } from "react"

import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

export default function JSONFormatterPage() {
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")
  const { toast } = useToast()

  function getTextareaValue(id: string) {
    const textarea = document.getElementById(id) as HTMLTextAreaElement
    return textarea ? textarea.value : ""
  }

  function formatJSON() {
    const json = getTextareaValue("editor1")
    try {
      const parsed = JSON.parse(json)
      setOutput(JSON.stringify(parsed, null, 2))
      setError("")
    } catch (error) {
      setError(`Error: ${(error as Error).message}`)
    }
  }

  function validateJSON() {
    const json = getTextareaValue("editor1")
    try {
      JSON.parse(json)
      setOutput("JSON is valid")
      setError("")
    } catch (error) {
      setError(`Invalid JSON: ${(error as Error).message}`)
    }
  }

  function diffJSON() {
    const json1 = getTextareaValue("editor1")
    const json2 = getTextareaValue("editor2")

    try {
      const parsed1 = JSON.parse(json1)
      const parsed2 = JSON.parse(json2)

      const diff = diffJson(parsed1, parsed2)

      let diffOutput = ""
      diff.forEach((part: Change) => {
        const color = part.added ? "green" : part.removed ? "red" : "grey"
        diffOutput += `<span style="color: ${color}">${part.value}</span>`
      })

      setOutput(diffOutput)
      setError("")
    } catch (error) {
      setError(`Error: ${(error as Error).message}`)
    }
  }

  function copyToClipboard() {
    navigator.clipboard
      .writeText(output)
      .then(() => {
        toast({
          title: "Copied!",
          description: "JSON content has been copied to clipboard.",
          duration: 3000,
        })
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description: "Failed to copy content to clipboard.",
          variant: "destructive",
          duration: 3000,
        })
      })
  }

  function clearInput() {
    const editor1 = document.getElementById("editor1") as HTMLTextAreaElement
    const editor2 = document.getElementById("editor2") as HTMLTextAreaElement
    if (editor1) editor1.value = ""
    if (editor2) editor2.value = ""
    setOutput("")
    setError("")
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-20">
      <main className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">
          JSON Formatter
        </h1>
        <p className="text-lg sm:text-xl text-center mb-6 sm:mb-12">
          A powerful JSON formatting tool with advanced features
        </p>

        <div className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4 mb-4">
          <Textarea
            id="editor1"
            placeholder="Enter first JSON data..."
            aria-label="First JSON input"
            className="w-full lg:w-1/2 h-48 sm:h-64 p-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Textarea
            id="editor2"
            placeholder="Enter second JSON data..."
            aria-label="Second JSON input"
            className="w-full lg:w-1/2 h-48 sm:h-64 p-2 bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <pre
          className="w-full h-48 sm:h-64 p-2 mb-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-md overflow-auto"
          dangerouslySetInnerHTML={{ __html: output }}
        />
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={formatJSON}
            variant="default"
            aria-label="Format JSON"
          >
            Format
          </Button>
          <Button
            onClick={validateJSON}
            variant="secondary"
            aria-label="Validate JSON"
          >
            Validate
          </Button>
          <Button onClick={diffJSON} variant="outline" aria-label="Diff JSON">
            Diff
          </Button>
          <Button
            onClick={copyToClipboard}
            variant="ghost"
            aria-label="Copy JSON"
          >
            Copy
          </Button>
          <Button
            onClick={clearInput}
            variant="destructive"
            aria-label="Clear input"
          >
            Clear
          </Button>
        </div>
      </main>
      <Toaster />
    </div>
  )
}
