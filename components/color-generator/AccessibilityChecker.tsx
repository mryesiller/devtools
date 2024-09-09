import { calculateContrastRatio } from "@/lib/ColorUtils"

interface AccessibilityCheckerProps {
  backgroundColor: string
}

export function AccessibilityChecker({
  backgroundColor,
}: AccessibilityCheckerProps) {
  const whiteContrast = calculateContrastRatio(backgroundColor, "#FFFFFF")
  const blackContrast = calculateContrastRatio(backgroundColor, "#000000")

  const getComplianceLevel = (ratio: number) => {
    if (ratio >= 7) return "AAA"
    if (ratio >= 4.5) return "AA"
    return "Fail"
  }

  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">Accessibility</h3>
      <p>
        White text: {whiteContrast} - {getComplianceLevel(whiteContrast)}
      </p>
      <p>
        Black text: {blackContrast} - {getComplianceLevel(blackContrast)}
      </p>
    </div>
  )
}
