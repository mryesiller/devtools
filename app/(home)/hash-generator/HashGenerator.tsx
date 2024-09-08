"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import crypto from "crypto"
import { useState } from "react"

export function HashGenerator() {
  const [input, setInput] = useState("")
  const [hashType, setHashType] = useState("md5")
  const [output, setOutput] = useState("")
  const { toast } = useToast()

  const generateHash = () => {
    try {
      const hash = crypto.createHash(hashType).update(input).digest("hex")
      setOutput(hash)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate hash. Please try again.",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(output)
      .then(() => {
        toast({
          title: "Copied!",
          description: "Hash copied to clipboard.",
          duration: 3000,
        })
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description: "Failed to copy hash to clipboard.",
          variant: "destructive",
          duration: 3000,
        })
      })
  }

  const clearAll = () => {
    setInput("")
    setOutput("")
    toast({
      title: "Cleared",
      description: "Input text and hash have been cleared.",
      duration: 3000,
    })
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter text to hash..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="min-h-[100px]"
      />
      <div className="flex space-x-2">
        <Select value={hashType} onValueChange={setHashType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select hash type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="md5">MD5</SelectItem>
            <SelectItem value="sha1">SHA-1</SelectItem>
            <SelectItem value="sha256">SHA-256</SelectItem>
            <SelectItem value="sha512">SHA-512</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={generateHash}>Generate Hash</Button>
      </div>
      {output && (
        <div className="space-y-2">
          <Textarea value={output} readOnly className="min-h-[100px]" />
          <div className="flex flex-wrap gap-2">
            <Button onClick={copyToClipboard}>Copy to Clipboard</Button>
            <Button onClick={clearAll} variant="destructive">
              Clear
            </Button>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  )
}
