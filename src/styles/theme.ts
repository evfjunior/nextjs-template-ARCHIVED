export const theme = {
  border: {
    radius: '0.4rem'
  },
  colors: {
    primary: '#f231a5',
    black: '#212121',
    white: '#fafafa'
  },
  font: {
    family: "'Poppins', sans-serif",
    weight: {
      normal: 400,
      bold: 600,
      light: 300
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  grid: {
    container: '120rem',
    gutter: '3.2rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
    slow: '0.5s ease-in-out'
  }
} as const
