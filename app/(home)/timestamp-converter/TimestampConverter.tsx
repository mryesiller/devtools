"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { ClipboardCopy } from "lucide-react"
import { useState } from "react"
import { DatePicker } from "./date-picker"

export function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [conversionType, setConversionType] = useState("toDate")
  const [resultText, setResultText] = useState("")
  const { toast } = useToast()

  const convertTimestamp = () => {
    if (conversionType === "toDate" && timestamp) {
      const date = new Date(parseInt(timestamp) * 1000)
      const convertedDateTime = date
        .toISOString()
        .slice(0, 19)
        .replace("T", " ")
      setResultText(convertedDateTime)
    } else if (conversionType === "toTimestamp" && date) {
      const convertedTimestamp = Math.floor(date.getTime() / 1000)
      setResultText(convertedTimestamp.toString())
    } else {
      setResultText("Please enter a valid input for conversion.")
    }
  }

  const clearInputs = () => {
    setTimestamp("")
    setDate(undefined)
    setResultText("")
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(resultText)
      .then(() => {
        toast({
          title: "Copied to clipboard",
          description: "The result has been copied to your clipboard.",
        })
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
        toast({
          title: "Copy failed",
          description: "Failed to copy the result to clipboard.",
          variant: "destructive",
        })
      })
  }

  return (
    <div className="space-y-4">
      <Select
        value={conversionType}
        onValueChange={(value) => setConversionType(value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select conversion type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="toDate">Timestamp to Date</SelectItem>
          <SelectItem value="toTimestamp">Date to Timestamp</SelectItem>
        </SelectContent>
      </Select>

      {conversionType === "toDate" ? (
        <Input
          placeholder="Enter Unix timestamp..."
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />
      ) : (
        <DatePicker date={date} setDate={setDate} />
      )}

      <div className="flex space-x-2">
        <Button onClick={convertTimestamp}>Convert</Button>
        <Button variant="outline" onClick={clearInputs}>
          Clear
        </Button>
      </div>

      {resultText && (
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">
                {conversionType === "toDate"
                  ? "Converted Date/Time:"
                  : "Converted Timestamp:"}
              </h3>
              <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                <ClipboardCopy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            <p className="text-2xl font-bold">{resultText}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
