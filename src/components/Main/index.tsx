import * as S from './styles'

export type MainProps = {
  children: React.ReactNode
}

export function Main({ children }: MainProps) {
  return <S.Container>{children}</S.Container>
}
