import React, { useContext, useEffect, useState } from "react"
import assets from "../assets/index"
import Image from "next/image"
import { UberContext } from "../context/uberContext"
const style = {
  wrapper: `h-full flex flex-col overflow-hidden`,
  title: `text-gray-500 text-center text-xs py-2 border-b`,
  carList: `flex flex-col flex-1 overflow-scroll overflow-x-hidden customScrollbar`,
  car: `flex p-3 m-2 items-center border-2 border-white`,
  selectedCar: `border-2 border-black flex p-3 m-2 items-center`,
  carImage: `h-14`,
  carDetails: `ml-2 flex-1`,
  service: `font-medium`,
  time: `text-xs text-blue-500`,
  priceContainer: `flex items-center`,
  price: `mr-[-0.8rem]`,
}
const { ethLogo, uberLogo } = assets

const RideSelector = () => {
  const [carList, setCarList] = useState([])
  const { selectedRide, setSelectedRide, setPrice, basePrice } =
    useContext(UberContext)
  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch("/api/db/getRideTypes")
        const data = await response.json()
        setCarList(data.data)
        console.log("ride types:", data.data[0])
        setSelectedRide(data.data[0])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])
  useEffect(() => {
    if (basePrice && selectedRide) {
      setPrice(
        ((basePrice / 10 ** 5) * selectedRide.priceMultiplier).toFixed(5)
      )
    }
  }, [basePrice, selectedRide])
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
        {carList.map((car, i) => (
          <div
            key={i}
            className={`${
              selectedRide?.service === car.service
                ? style.selectedCar
                : style.car
            }`}
            onClick={() => {
              setSelectedRide(car)
              console.log(
                "car",
                ((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)
              )
              setPrice(((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5))
            }}
          >
            {" "}
            <Image
              alt={"carIcon"}
              src={car.iconUrl}
              className={style.carImage}
              height={50}
              width={50}
            />
            <div className={style.carDetails}>
              <div className={style.service}>{car.service}</div>
              <div className={style.time}>5 mins away</div>
            </div>
            <div className={style.priceContainer}>
              <div className={style.price}>
                {((basePrice / 10 ** 5) * car.priceMultiplier).toFixed(5)}
              </div>
              <Image
                alt={"ethlogo"}
                src={ethLogo}
                className={style.ethLogo}
                height={25}
                width={48}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RideSelector
