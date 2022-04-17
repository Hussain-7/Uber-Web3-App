import Navbar from "../components/Navbar"
import Map from "../components/Map"
import "mapbox-gl/dist/mapbox-gl.css"

// import LocationSelector from "../components/LocationSelector"
// import Confirm from "../components/Confirm"

const style = {
  wrapper: `h-screen w-screen flex flex-col overflow-hidden`,
  main: `h-full w-screen flex-1  z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[350px] ml-[1rem] py-[3rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[500px] bg-white rounded-lg flex flex-col overflow-scroll`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          {/* <LocationSelector /> */}
          {/* <Confirm /> */}
        </div>
      </div>
    </div>
  )
}
