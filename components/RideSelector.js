import React from "react"
import assets from "../assets/index"
import Image from "next/image"
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
const {
  uberBlack,
  uberBlackSuv,
  uberSelect,
  uberX,
  uberXL,
  ethLogo,
  uberLogo,
} = assets

const carList = [
  {
    service: "UberX",
    iconUrl: uberX,
    priceMultiplier: 1,
  },
  {
    service: "uberBlack",
    iconUrl: uberBlack,
    priceMultiplier: 1.5,
  },
  {
    service: "uberBlackSuv",
    iconUrl: uberBlackSuv,
    priceMultiplier: 1.5,
  },
  {
    service: "uberSelect",
    iconUrl: uberSelect,
    priceMultiplier: 1.5,
  },
  {
    service: "uberXL",
    iconUrl: uberXL,
    priceMultiplier: 1.5,
  },
]

const RideSelector = () => {
  const basePrice = 20
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
        {carList.map((car, i) => (
          <div key={i} className={style.car}>
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
