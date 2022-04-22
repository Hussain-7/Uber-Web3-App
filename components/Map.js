import React, { useContext, useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import { UberContext } from "../context/uberContext"

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)
  console.log(pickupCoordinates, dropoffCoordinates)
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [33.64, 72.99],
      zoom: 3,
    })
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }
    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }
    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 60,
      })
    }
  }, [])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addToMap(map)
  }
  return <div ref={mapContainer} className={style.wrapper} />
}

export default Map
