import type { AppProps } from 'next/app'

import { GlobalStyles } from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
