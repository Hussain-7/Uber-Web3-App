import { useEffect, useContext } from "react"
import mapboxgl from "mapbox-gl"
import { UberContext } from "../context/uberContext"

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const { pickupCoordinates } = useContext(UberContext)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [74.329376, 31.58], //Lahore long lang
      zoom: 4,
    })
    console.log("pickupCoordinates", pickupCoordinates)
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }

    if (pickupCoordinates) {
      map.flyTo({
        center: pickupCoordinates,
        zoom: 14,
      })
    }
  }, [pickupCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <div className={style.wrapper} id="map" />
}

export default Map
