import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useEffect, useState } from "react"

interface SavedColorsProps {
  currentColor: string
}

export function SavedColors({ currentColor }: SavedColorsProps) {
  const [savedColors, setSavedColors] = useState<string[]>([])
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  useEffect(() => {
    const storedColors = localStorage.getItem("savedColors")
    if (storedColors) {
      setSavedColors(JSON.parse(storedColors))
    }
  }, [])

  const saveColor = () => {
    if (!savedColors.includes(currentColor)) {
      const newSavedColors = [...savedColors, currentColor]
      setSavedColors(newSavedColors)
      localStorage.setItem("savedColors", JSON.stringify(newSavedColors))
    }
  }

  const removeColor = (colorToRemove: string) => {
    const newSavedColors = savedColors.filter(
      (color) => color !== colorToRemove
    )
    setSavedColors(newSavedColors)
    localStorage.setItem("savedColors", JSON.stringify(newSavedColors))
  }

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color)
    setCopiedColor(color)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Saved Colors</h3>
        <Button onClick={saveColor} size="sm">
          Save Current Color
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {savedColors.map((color, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className="w-12 h-12 relative cursor-pointer group rounded-lg overflow-hidden"
                  style={{ backgroundColor: color }}
                >
                  <div className="absolute inset-0 flex flex-col justify-between p-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                    <button
                      className="self-end text-white hover:text-red-500 text-xs"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeColor(color)
                      }}
                    >
                      ×
                    </button>
                    <button
                      className="w-full bg-white text-black py-0.5 text-xs"
                      onClick={(e) => {
                        e.stopPropagation()
                        copyToClipboard(color)
                      }}
                    >
                      {copiedColor === color ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{color}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}
