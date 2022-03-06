import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'

import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App