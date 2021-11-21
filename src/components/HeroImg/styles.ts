import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  max-width: 72rem;
  margin-bottom: 0.8rem;

  ${media.greaterThan('medium')`
    margin-bottom: 1.6rem;
  `}
`
