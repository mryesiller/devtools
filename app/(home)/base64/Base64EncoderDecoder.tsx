"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Base64EncoderDecoder() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const encodeBase64 = () => {
    try {
      const encodedText = btoa(input)
      setOutput(encodedText)
    } catch (error) {
      setOutput("Error: Invalid input for Base64 encoding")
    }
  }

  const decodeBase64 = () => {
    try {
      const decodedText = atob(input)
      setOutput(decodedText)
    } catch (error) {
      setOutput("Error: Invalid Base64 input")
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter text to encode or decode..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[100px]"
      />
      <div className="flex space-x-2">
        <Button onClick={encodeBase64}>Encode</Button>
        <Button onClick={decodeBase64}>Decode</Button>
      </div>
      <Textarea
        placeholder="Encoded or decoded text will appear here..."
        value={output}
        readOnly
        className="min-h-[100px]"
      />
    </div>
  )
}
