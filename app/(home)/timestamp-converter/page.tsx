import { TimestampConverter } from "./TimestampConverter"
import { metadata } from "./metadata"

export { metadata }

export default function TimestampConverterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Timestamp Converter</h1>
      <p className="mb-6">
        Convert between Unix timestamps and human-readable date/time formats.
      </p>
      <TimestampConverter />
    </div>
  )
}
