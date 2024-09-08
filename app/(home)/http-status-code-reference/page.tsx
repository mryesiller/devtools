import { HTTPStatusCodeReference } from "./HTTPStatusCodeReference"
import { metadata } from "./metadata"

export { metadata }

export default function HTTPStatusCodeReferencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">HTTP Status Code Reference</h1>
      <p className="mb-6">A handy reference tool for HTTP status codes.</p>
      <HTTPStatusCodeReference />
    </div>
  )
}
