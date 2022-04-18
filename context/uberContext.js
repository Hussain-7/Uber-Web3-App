import { createContext, useState, useEffect } from "react"
import { faker } from "@faker-js/faker"

export const UberContext = createContext()

const createLocationCoordinatePromise = (locationName, locationType) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("api/map/getLocationCoordinates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location: locationName,
        }),
      })

      const data = await response.json()

      if (data.message === "success") {
        switch (locationType) {
          case "pickup":
            setPickupCoordinates(data.data)
            break
          case "dropoff":
            setDropoffCoordinates(data.data)
            break
        }
        resolve()
      } else {
        reject()
      }
    } catch (error) {
      console.error(error)
      reject()
    }
  })
}

export const UberProvider = ({ children }) => {
  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")
  const [pickupCoordinates, setPickupCoordinates] = useState()
  const [dropoffCoordinates, setDropoffCoordinates] = useState()

  useEffect(() => {
    ;(async () => {
      await Promise.all([])
    })()
  }, [])
  return <UberContext.Provider value={{}}>{children}</UberContext.Provider>
}
