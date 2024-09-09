export function generateRandomColor(): string {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
  )
}

// We'll add more color utility functions here later

export function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return [r, g, b]
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
}

export function rgbToHsl(
  r: number,
  g: number,
  b: number
): [number, number, number] {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  let h,
    s,
    l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)]
}

export function hslToRgb(
  h: number,
  s: number,
  l: number
): [number, number, number] {
  s /= 100
  l /= 100
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [
    Math.round(255 * f(0)),
    Math.round(255 * f(8)),
    Math.round(255 * f(4)),
  ]
}

export function generateComplementaryColor(hue: number): number {
  return (hue + 180) % 360
}

export function generateAnalogousColors(hue: number): [number, number] {
  return [(hue + 30) % 360, (hue + 330) % 360]
}

export function generateTriadicColors(hue: number): [number, number] {
  return [(hue + 120) % 360, (hue + 240) % 360]
}

export function generateTetradicColors(hue: number): [number, number, number] {
  return [(hue + 90) % 360, (hue + 180) % 360, (hue + 270) % 360]
}

export function generateMonochromaticColors(
  h: number,
  s: number,
  l: number
): [number, number, number, number] {
  return [
    l - 20 < 0 ? 0 : l - 20,
    l - 10 < 0 ? 0 : l - 10,
    l + 10 > 100 ? 100 : l + 10,
    l + 20 > 100 ? 100 : l + 20,
  ]
}

function luminance(r: number, g: number, b: number): number {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

export function calculateContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  const l1 = luminance(rgb1[0], rgb1[1], rgb1[2])
  const l2 = luminance(rgb2[0], rgb2[1], rgb2[2])
  const ratio = l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05)
  return Number(ratio.toFixed(2))
}
