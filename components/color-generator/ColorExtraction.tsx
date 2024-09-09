import { useState } from "react"

interface ColorExtractionProps {
  onColorSelect: (color: string) => void
}

export function ColorExtraction({ onColorSelect }: ColorExtractionProps) {
  const [extractedColors, setExtractedColors] = useState<string[]>([])

  const extractColors = (imageData: ImageData) => {
    const colorMap: { [key: string]: number } = {}
    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i]
      const g = imageData.data[i + 1]
      const b = imageData.data[i + 2]
      const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16)
        .slice(1)}`
      colorMap[hex] = (colorMap[hex] || 0) + 1
    }
    return Object.entries(colorMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([color]) => color)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement("canvas")
          canvas.width = img.width
          canvas.height = img.height
          const ctx = canvas.getContext("2d")
          if (ctx) {
            ctx.drawImage(img, 0, 0)
            const imageData = ctx.getImageData(
              0,
              0,
              canvas.width,
              canvas.height
            )
            const colors = extractColors(imageData)
            setExtractedColors(colors)
          }
        }
        img.src = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">Color Extraction</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
      <div className="flex space-x-2">
        {extractedColors.map((color, index) => (
          <div
            key={index}
            className="w-12 h-12 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
          ></div>
        ))}
      </div>
    </div>
  )
}
