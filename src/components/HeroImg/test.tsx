import { render, screen } from '@testing-library/react'

import { HeroImg } from '.'

describe('<HeroImg />', () => {
  it('should render an image correctly', () => {
    render(<HeroImg />)
    const image = screen.getByLabelText(
      'an illustration of a girl with the NextJS logo on her right side'
    )
    expect(image).toBeInTheDocument()
  })
})
