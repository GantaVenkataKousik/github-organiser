"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

// Define device location data with global coordinates
const deviceLocations = [
  { id: 1, name: "Mumbai HQ", lat: 19.076, lng: 72.8777, status: "active", devices: 12 },
  { id: 2, name: "Delhi Office", lat: 28.7041, lng: 77.1025, status: "active", devices: 8 },
  { id: 3, name: "Bangalore Tech Park", lat: 12.9716, lng: 77.5946, status: "warning", devices: 5 },
  { id: 4, name: "Chennai Facility", lat: 13.0827, lng: 80.2707, status: "inactive", devices: 3 },
  { id: 5, name: "Hyderabad Campus", lat: 17.385, lng: 78.4867, status: "active", devices: 7 },
  { id: 6, name: "Kolkata Office", lat: 22.5726, lng: 88.3639, status: "warning", devices: 4 },
  // International locations
  { id: 7, name: "New York Office", lat: 40.7128, lng: -74.006, status: "active", devices: 9 },
  { id: 8, name: "London Branch", lat: 51.5074, lng: -0.1278, status: "active", devices: 6 },
  { id: 9, name: "Tokyo Center", lat: 35.6762, lng: 139.6503, status: "warning", devices: 4 },
  { id: 10, name: "Sydney Hub", lat: -33.8688, lng: 151.2093, status: "active", devices: 5 },
  { id: 11, name: "Dubai Facility", lat: 25.2048, lng: 55.2708, status: "inactive", devices: 2 },
]

type LocationMarker = {
  id: number
  name: string
  lat: number
  lng: number
  status: "active" | "warning" | "inactive"
  devices: number
  x: number
  y: number
}

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<LocationMarker | null>(null)

  // Convert lat/lng to x/y coordinates on the world map
  const markers: LocationMarker[] = deviceLocations.map((location) => {
    // World map coordinates conversion
    // Longitude range: -180 to 180 maps to 0% to 100% of width
    // Latitude range: 90 to -90 maps to 0% to 100% of height
    const x = ((location.lng + 180) / 360) * 100
    const y = ((90 - location.lat) / 180) * 100

    return {
      ...location,
      x,
      y,
    }
  })

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Device Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[500px] bg-gray-100 rounded-md overflow-hidden">
          {/* World map image */}
          <Image src="/world-map.png" alt="World Map showing device locations" fill className="object-cover" priority />

          {/* Location markers */}
          {markers.map((marker) => (
            <div
              key={marker.id}
              className={`absolute w-4 h-4 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 border-2 border-white ${
                marker.status === "active"
                  ? "bg-green-500"
                  : marker.status === "warning"
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              onClick={() => setSelectedLocation(marker)}
            />
          ))}

          {/* Location info popup */}
          {selectedLocation && (
            <div
              className="absolute bg-white p-3 rounded-md shadow-lg z-10 w-64"
              style={{
                left: `${selectedLocation.x}%`,
                top: `${selectedLocation.y + 5}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{selectedLocation.name}</h3>
                <Badge
                  variant={
                    selectedLocation.status === "active"
                      ? "default"
                      : selectedLocation.status === "warning"
                        ? "outline"
                        : "destructive"
                  }
                >
                  {selectedLocation.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Devices: {selectedLocation.devices}</p>
              <p className="text-sm text-muted-foreground">
                Coordinates: {selectedLocation.lat.toFixed(4)}, {selectedLocation.lng.toFixed(4)}
              </p>
              <button
                className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedLocation(null)
                }}
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
