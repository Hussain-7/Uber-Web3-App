import "../styles/globals.css"
import { UberProvider } from "../context/uberContext"

function MyApp({ Component, pageProps }) {
  return (
    <UberProvider>
      <Component {...pageProps} />
    </UberProvider>
  )
}

export default MyApp
