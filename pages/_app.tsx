import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  Head  from 'next/head'

import { Provider } from 'react-redux'
import store from '../redux/store'


function MyApp({ Component, pageProps }: AppProps) {

  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
  return (
    <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
