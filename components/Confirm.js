import { ethers } from "ethers"
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
  const {
    currentAccount,
    pickup,
    dropoff,
    price,
    selectedRide,
    pickupCoordinates,
    dropoffCoordinates,
    metamask,
  } = useContext(UberContext)

  const storeTripDetails = async (pickup, dropoff) => {
    try {
      await fetch("/api/db/saveTrips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pickupLocation: pickup,
          dropoffLocation: dropoff,
          userWalletAddress: currentAccount,
          price: price,
          selectedRide: selectedRide,
        }),
      })
      console.log("params:", [
        {
          from: currentAccount,
          to: process.env.NEXT_PUBLIC_UBER_ADDRESS,
          gas: "0x7EF40", // 520000 Gwei
          value: ethers.utils.parseEther(price)._hex,
        },
      ])
      await metamask.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: process.env.NEXT_PUBLIC_UBER_ADDRESS,
            gas: "0x7EF40", // 520000 Gwei
            value: ethers.utils.parseEther(price)._hex,
          },
        ],
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div
            className={style.confirmButton}
            onClick={() => storeTripDetails(pickup, dropoff)}
          >
            Confirm {selectedRide.service || "UberX"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
