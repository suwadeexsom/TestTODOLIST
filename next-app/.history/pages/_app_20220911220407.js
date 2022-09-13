import '../styles/tailwind.css'
import '../styles/globals.css'
import { Addrecords } from './api/add'


function MyApp({ Component, pageProps }) {
  return <Addrecords {...pageProps} />
}

export default MyApp
