import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/global'
import { theme } from 'styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
