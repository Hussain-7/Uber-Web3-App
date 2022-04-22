import { client } from "../../../lib/sanity"

const createUserInSanity = async (req, res) => {
  try {
    console.log("creating client")
    const userDoc = {
      _type: "users",
      _id: req.body.userWalletAddress,
      name: req.body.name,
      walletAddress: req.body.userWalletAddress,
    }
    console.log("userDoc", userDoc)
    await client.createIfNotExists(userDoc)
    console.log({ message: "success" })
    res.status(200).send({ message: "success" })
  } catch (error) {
    console.log({ message: error.message })

    res.status(500).send({ message: "error", data: error.message })
  }
}

export default createUserInSanity
