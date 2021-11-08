import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${() => css`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    *::after,
    *::before {
      box-sizing: inherit;
    }

    body,
    html,
    #__next {
      height: 100%;
    }

    html {
      min-width: 320px;
      font-size: 62.5%;
    }

    body {
      background-color: #212121;
      color: #fafafa;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-size: 1rem;
      scroll-behavior: smooth;
    }

    a,
    button,
    input,
    select,
    textarea {
      font: inherit;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      -webkit-tap-highlight-color: transparent;
    }
  `}
`
