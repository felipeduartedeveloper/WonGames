import { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado BoilerPlate</title>
        <link rel="shortcut icon" href="/img" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
