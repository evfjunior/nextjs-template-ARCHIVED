import { screen } from '@testing-library/react'

import { render } from 'utils/test-helpers'

import { Main } from '.'

describe('<Main />', () => {
  it('should render the component and the content correctly', () => {
    render(
      <Main>
        <p>Main component</p>
      </Main>
    )
    const component = screen.getByRole('main')
    const content = screen.getByText('Main component')
    expect(component).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })
})
