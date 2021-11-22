import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
    height: 100vh;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small};
    `}
  `}
`
