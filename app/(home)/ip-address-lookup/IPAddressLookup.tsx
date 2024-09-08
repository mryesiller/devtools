"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

interface IPInfo {
  ip: string
  country: string
  city: string
  latitude: string
  longitude: string
}

export function IPAddressLookup() {
  const [ipAddress, setIpAddress] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null)
  const [userIpInfo, setUserIpInfo] = useState<IPInfo | null>(null)

  useEffect(() => {
    fetchUserIpInfo()
  }, [])

  const fetchUserIpInfo = async () => {
    try {
      const response = await fetch("https://get.geojs.io/v1/ip/geo.json")
      const data = await response.json()
      setUserIpInfo(data)
    } catch (error) {
      console.error("Error fetching user IP information:", error)
    }
  }

  const lookupIPAddress = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `https://get.geojs.io/v1/ip/geo/${ipAddress}.json`
      )
      const data = await response.json()
      setIpInfo(data)
    } catch (error) {
      console.error("Error fetching IP information:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      {userIpInfo && (
        <div className="bg-card p-4 rounded-md shadow-md mb-8">
          <h2 className="font-bold text-xl mb-2">
            Your IP Address Information
          </h2>
          <p>
            <strong>IP Address:</strong> {userIpInfo.ip}
          </p>
          <p>
            <strong>Country:</strong> {userIpInfo.country}
          </p>
          <p>
            <strong>City:</strong> {userIpInfo.city}
          </p>
          <p>
            <strong>Latitude:</strong> {userIpInfo.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {userIpInfo.longitude}
          </p>
        </div>
      )}

      <p className="mb-4">
        Enter an IP address to get information about its geographical location.
      </p>

      <Input
        type="text"
        placeholder="Enter an IP address..."
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
        className="w-full"
      />
      <Button onClick={lookupIPAddress} disabled={isLoading}>
        Lookup
      </Button>
      {isLoading && (
        <div className="mt-4">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      )}
      {ipInfo && !isLoading && (
        <div className="mt-8 bg-card p-4 rounded-md shadow-md">
          <h2 className="font-bold text-xl mb-2">IP Address Information</h2>
          <p>
            <strong>IP Address:</strong> {ipInfo.ip}
          </p>
          <p>
            <strong>Country:</strong> {ipInfo.country}
          </p>
          <p>
            <strong>City:</strong> {ipInfo.city}
          </p>
          <p>
            <strong>Latitude:</strong> {ipInfo.latitude}
          </p>
          <p>
            <strong>Longitude:</strong> {ipInfo.longitude}
          </p>
        </div>
      )}
    </div>
  )
}
