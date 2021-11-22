import { screen } from '@testing-library/react'

import { render } from 'utils/test-helpers'

import { Card } from '.'

describe('<Card />', () => {
  it('should render the component and the text correctly', () => {
    render(
      <Card
        heading="Lorem ipsum"
        leading="Dolor sit amet, consectetur adipiscing elit."
      />
    )

    const component = screen.getByRole('article')
    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Lorem ipsum'
    })
    const leading = screen.getByText(
      'Dolor sit amet, consectetur adipiscing elit.'
    )

    expect(component).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(leading).toBeInTheDocument()
  })

  it('should render the component, the hero image and the text correctly', () => {
    render(
      <Card
        hero
        heading="Lorem ipsum"
        leading="Dolor sit amet, consectetur adipiscing elit."
      />
    )

    const component = screen.getByRole('article')
    const hero = screen.getByLabelText(
      'an illustration of a girl with the NextJS logo on her right side'
    )
    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Lorem ipsum'
    })
    const leading = screen.getByText(
      'Dolor sit amet, consectetur adipiscing elit.'
    )

    expect(component).toBeInTheDocument()
    expect(hero).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(leading).toBeInTheDocument()
  })
})
