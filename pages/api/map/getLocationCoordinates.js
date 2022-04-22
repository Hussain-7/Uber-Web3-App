const getLocationCoordinates = async (req, res) => {
  // ** Docs for maps box apis available here: https://docs.mapbox.com/api/search/geocoding/
  const mapboxUrl = `${process.env.MAPBOX_PLACES_API_URL}/${req.body.location}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()
    // ** The data is return as an array for most related places so we get the first place and take its coordinates
    res.status(200).send({ message: "success", data: data.features[0].center })
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message })
  }
}

export default getLocationCoordinates
