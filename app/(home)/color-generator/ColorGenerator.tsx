"use client"

import { AccessibilityChecker } from "@/components/color-generator/AccessibilityChecker"
import { ColorExtraction } from "@/components/color-generator/ColorExtraction"
import { GradientGenerator } from "@/components/color-generator/GradientGenerator"
import { SavedColors } from "@/components/color-generator/SavedColors"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  generateAnalogousColors,
  generateComplementaryColor,
  generateMonochromaticColors,
  generateRandomColor,
  generateTetradicColors,
  generateTriadicColors,
  hexToRgb,
  hslToRgb,
  rgbToHex,
  rgbToHsl,
} from "@/lib/ColorUtils"
import { useCallback, useEffect, useState } from "react"

export default function ColorGenerator() {
  const [currentColor, setCurrentColor] = useState("#000000")
  const [rgbColor, setRgbColor] = useState<[number, number, number]>([0, 0, 0])
  const [hslColor, setHslColor] = useState<[number, number, number]>([0, 0, 0])
  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [lightness, setLightness] = useState(0)
  const [paletteType, setPaletteType] = useState("complementary")
  const [palette, setPalette] = useState<string[]>([])

  useEffect(() => {
    const rgb = hexToRgb(currentColor)
    setRgbColor(rgb)
    const hsl = rgbToHsl(...rgb)
    setHslColor(hsl)
    setHue(hsl[0])
    setSaturation(hsl[1])
    setLightness(hsl[2])
  }, [currentColor])

  useEffect(() => {
    generatePalette()
  }, [currentColor, paletteType])

  const generatePalette = useCallback(() => {
    const [h, s, l] = hslColor
    let newPalette: string[] = []

    switch (paletteType) {
      case "complementary":
        newPalette = [
          rgbToHex(...hslToRgb(generateComplementaryColor(h), s, l)),
        ]
        break
      case "analogous":
        newPalette = generateAnalogousColors(h).map((hue) =>
          rgbToHex(...hslToRgb(hue, s, l))
        )
        break
      case "triadic":
        newPalette = generateTriadicColors(h).map((hue) =>
          rgbToHex(...hslToRgb(hue, s, l))
        )
        break
      case "tetradic":
        newPalette = generateTetradicColors(h).map((hue) =>
          rgbToHex(...hslToRgb(hue, s, l))
        )
        break
      case "monochromatic":
        newPalette = generateMonochromaticColors(h, s, l).map((lightness) =>
          rgbToHex(...hslToRgb(h, s, lightness))
        )
        break
    }

    setPalette(newPalette)
  }, [hslColor, paletteType])

  const updateColorFromHSL = useCallback((h: number, s: number, l: number) => {
    const rgb = hslToRgb(h, s, l)
    const hex = rgbToHex(...rgb)
    setCurrentColor(hex)
    setRgbColor(rgb)
    setHslColor([h, s, l])
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">
          Color Generator
        </h1>
      </header>

      <main className="flex-grow p-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="mb-4">
              <CardContent className="pt-6">
                <div
                  className="w-full h-64 mb-4 rounded-lg shadow-lg"
                  style={{ backgroundColor: currentColor }}
                ></div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p>
                      <strong>HEX:</strong> {currentColor}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>RGB:</strong> rgb({rgbColor.join(", ")})
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>HSL:</strong> hsl({hslColor.join(", ")})
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => setCurrentColor(generateRandomColor())}
                  className="w-full mb-4"
                >
                  Generate Random Color
                </Button>
                <div className="mb-4">
                  <label className="block mb-2">Hue: {hue}</label>
                  <Slider
                    min={0}
                    max={360}
                    step={1}
                    value={[hue]}
                    onValueChange={(value) =>
                      updateColorFromHSL(value[0], saturation, lightness)
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">
                    Saturation: {saturation}%
                  </label>
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={[saturation]}
                    onValueChange={(value) =>
                      updateColorFromHSL(hue, value[0], lightness)
                    }
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Lightness: {lightness}%</label>
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={[lightness]}
                    onValueChange={(value) =>
                      updateColorFromHSL(hue, saturation, value[0])
                    }
                  />
                </div>
              </CardContent>
            </Card>
            <div>
              <Card className="mb-4">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Color Palette</h3>
                  <Select
                    onValueChange={setPaletteType}
                    defaultValue={paletteType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select palette type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="complementary">
                        Complementary
                      </SelectItem>
                      <SelectItem value="analogous">Analogous</SelectItem>
                      <SelectItem value="triadic">Triadic</SelectItem>
                      <SelectItem value="tetradic">Tetradic</SelectItem>
                      <SelectItem value="monochromatic">
                        Monochromatic
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex mt-4">
                    {palette.map((color, index) => (
                      <div
                        key={index}
                        className="w-12 h-12 mr-2 cursor-pointer"
                        style={{ backgroundColor: color }}
                        onClick={() => setCurrentColor(color)}
                      ></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="mb-4">
                <CardContent className="pt-6">
                  <SavedColors currentColor={currentColor} />
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <AccessibilityChecker backgroundColor={currentColor} />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <GradientGenerator currentColor={currentColor} />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <ColorExtraction onColorSelect={setCurrentColor} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="p-4 bg-gray-100 text-center">
        <p>© 2023 Color Generator</p>
      </footer>
    </div>
  )
}
