import React, { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
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
  })
  return <div ref={mapContainer} className={style.wrapper} />
}

export default Map
