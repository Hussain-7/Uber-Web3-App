import { useContext } from "react"
import { UberContext } from "../context/uberContext"
import RideSelector from "./RideSelector"

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between overflow-hidden`,
  rideSelectorContainer: `h-full flex flex-col overflow-hidden overflow-x-hidden border-b`,
  confirmButtonContainer: ` cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-2 text-center text-md`,
}

const carList = []

const Confirm = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)
  const storeTripDetails = () => {}
  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div
            className={style.confirmButton}
            onClick={() => storeTripDetails()}
          >
            Confirm UberX
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
