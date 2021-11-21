import { HeroImg } from 'components/HeroImg'

import * as S from './styles'

export type CardProps = {
  heading: string
  leading: string
  hero?: boolean
}

export function Card({ heading, leading, hero = false }: CardProps) {
  return (
    <S.Container>
      {!!hero && <HeroImg />}
      <S.Heading>{heading}</S.Heading>
      <S.Leading>{leading}</S.Leading>
    </S.Container>
  )
}
