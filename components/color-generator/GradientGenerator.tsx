import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

interface GradientGeneratorProps {
  currentColor: string
}

export function GradientGenerator({ currentColor }: GradientGeneratorProps) {
  const [startColor, setStartColor] = useState(currentColor)
  const [endColor, setEndColor] = useState("#FFFFFF")
  const [direction, setDirection] = useState("to right")

  const gradientStyle = {
    background: `linear-gradient(${direction}, ${startColor}, ${endColor})`,
    height: "100px",
    borderRadius: "8px",
  }

  const cssCode = `background: linear-gradient(${direction}, ${startColor}, ${endColor});`

  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">Gradient Generator</h3>
      <div style={gradientStyle} className="mb-4"></div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label>Start Color</label>
          <input
            type="color"
            value={startColor}
            onChange={(e) => setStartColor(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <label>End Color</label>
          <input
            type="color"
            value={endColor}
            onChange={(e) => setEndColor(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
      <Select onValueChange={setDirection} defaultValue={direction}>
        <SelectTrigger>
          <SelectValue placeholder="Select direction" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="to right">Left to Right</SelectItem>
          <SelectItem value="to left">Right to Left</SelectItem>
          <SelectItem value="to bottom">Top to Bottom</SelectItem>
          <SelectItem value="to top">Bottom to Top</SelectItem>
          <SelectItem value="to bottom right">
            Top Left to Bottom Right
          </SelectItem>
          <SelectItem value="to bottom left">
            Top Right to Bottom Left
          </SelectItem>
        </SelectContent>
      </Select>
      <div className="mt-4">
        <h4 className="font-bold mb-2">CSS Code:</h4>
        <code className="bg-gray-100 p-2 rounded block">{cssCode}</code>
      </div>
      <Button
        onClick={() => navigator.clipboard.writeText(cssCode)}
        className="mt-2"
      >
        Copy CSS
      </Button>
    </div>
  )
}
