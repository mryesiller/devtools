import { IPAddressLookup } from "./IPAddressLookup"
import { metadata } from "./metadata"

export { metadata }

export default function IPAddressLookupPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">IP Address Lookup</h1>
      <IPAddressLookup />
    </div>
  )
}
