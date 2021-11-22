import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
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
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.small};
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
