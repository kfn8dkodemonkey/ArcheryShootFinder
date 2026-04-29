import * as React from "react"
import { useEffect, useRef, useState } from "react"
import * as styles from "./map.module.css"

const MapComponent = ({ shoots }) => {
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const [selectedShoot, setSelectedShoot] = useState(null)
  const mapInitialized = useRef(false)

  // Load Google Maps script
  useEffect(() => {
    // Get API key from environment variable
    const apiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY
    
    // Check if API key is configured and valid
    if (!apiKey || apiKey.trim() === "" || apiKey.length < 10) {
      console.warn("Google Maps API key not configured or invalid.")
      console.warn("Current value:", apiKey ? `${apiKey.substring(0, 10)}...` : "undefined")
      console.warn("Please set GATSBY_GOOGLE_MAPS_API_KEY in your .env file.")
      return
    }

    // If Google Maps is already loaded, initialize immediately
    if (window.google && window.google.maps) {
      initMap()
      return
    }

    // Create callback function before loading script
    window.initGoogleMaps = () => {
      initMap()
    }

    // Load Google Maps script
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMaps`
    script.async = true
    script.defer = true
    
    // Handle script load errors
    script.onerror = () => {
      console.error("Failed to load Google Maps API. Check your API key and internet connection.")
    }
    
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      // Note: We don't remove the script tag as Google Maps needs to stay loaded
    }
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

  const initMap = () => {
    if (!mapRef.current || mapInitialized.current) return
    
    // Calculate center based on all shoot locations
    const centerLat = 39.8283 // Center of US
    const centerLng = -98.5795
    
    const mapOptions = {
      center: { lat: centerLat, lng: centerLng },
      zoom: 4,
      mapTypeId: "roadmap",
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    }

    const newMap = new window.google.maps.Map(mapRef.current, mapOptions)
    setMap(newMap)
    mapInitialized.current = true

    // Create markers for each shoot with a valid location
    const newMarkers = []
    shoots.forEach((shoot, index) => {
      if (shoot.location && shoot.location.lat && shoot.location.lng) {
        const marker = new window.google.maps.Marker({
          position: { lat: shoot.location.lat, lng: shoot.location.lng },
          map: newMap,
          title: shoot.name,
          animation: window.google.maps.Animation.DROP,
          icon: {
            url: "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="48" viewBox="0 0 32 48">
                <path fill="%232d5a27" d="M16 0C7.163 0 0 7.163 0 16c0 12 16 32 16 32s16-20 16-32C32 7.163 24.837 0 16 0z"/>
                <circle fill="%23fff" cx="16" cy="16" r="6"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(32, 48),
            anchor: new window.google.maps.Point(16, 48)
          }
        })

        // Add click listener to marker
        marker.addListener("click", () => {
          setSelectedShoot(shoot)
          newMap.panTo({ lat: shoot.location.lat, lng: shoot.location.lng })
          newMap.setZoom(12)
        })

        newMarkers.push(marker)
      }
    })
    
    // Fit bounds to show all markers
    if (newMarkers.length > 0) {
      const bounds = new window.google.maps.LatLngBounds()
      newMarkers.forEach(marker => bounds.extend(marker.getPosition()))
      newMap.fitBounds(bounds)
    }
  }

  // handleShootSelect removed as unused

  // Check if API key is configured for the placeholder
  const apiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY
  const showPlaceholder = !apiKey || apiKey.trim() === "" || apiKey.length < 10

  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapHeader}>
        <h2>Archery Shoots Map</h2>
        <p className={styles.mapSubtitle}>
          Click on markers to see shoot details, or select a shoot from the list below
        </p>
      </div>
      
      <div className={styles.mapWrapper}>
        {showPlaceholder && (
          <div className={styles.mapPlaceholder}>
            <div className={styles.placeholderIcon}>🗺️</div>
            <h3>Map Not Configured</h3>
            <p>
              To enable the interactive map, please set up a Google Maps API key.
            </p>
            <p className={styles.placeholderInstructions}>
              See <code>.env.example</code> for setup instructions.
            </p>
            {apiKey && (
              <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-sx)', opacity: 0.7 }}>
                Current key length: {apiKey.length} characters
              </p>
            )}
          </div>
        )}
        <div ref={mapRef} className={styles.map} />
        
        {selectedShoot && (
          <div className={styles.infoCard}>
            <button 
              className={styles.closeButton} 
              onClick={() => setSelectedShoot(null)}
              aria-label="Close"
            >
              ×
            </button>
            <h3>{selectedShoot.name}</h3>
            <p className={styles.infoDate}>
              {new Date(selectedShoot.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </p>
            <p className={styles.infoLocation}>
              {selectedShoot.location.name}<br />
              {selectedShoot.location.address}<br />
              {selectedShoot.location.city}, {selectedShoot.location.state} {selectedShoot.location.zip}
            </p>
            <div className={styles.infoCategories}>
              {selectedShoot.categories.map((category, index) => (
                <span key={index} className={styles.categoryTag}>{category}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MapComponent