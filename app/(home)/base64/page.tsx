import { Base64EncoderDecoder } from "./Base64EncoderDecoder"
import { metadata } from "./metadata"

export { metadata }

export default function Base64EncoderDecoderPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Base64 Encoder/Decoder</h1>
      <p className="mb-6">Encode or decode text using Base64 encoding.</p>
      <Base64EncoderDecoder />
    </div>
  )
}
