import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material'
import { ReactNode } from 'react'
/* CSS HEX */
// --eerie-black: #1C1C1Cff;
// --white: #FEFEFEff;
// --honeydew: #D6EDD9ff;
// --french-gray: #C3C4C8ff;

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1C1C1Cff'
    },
    secondary: {
      main: '#FEFEFEff'
    },
    common: {
      black: '#1C1C1Cff',
      white: '#FEFEFEff'
    },
    text: {
      primary: '#1C1C1Cff',
      secondary: '#FEFEFEff'
    },
    background: {
      default: '#FEFEFEff'
    }
  }
}

const theme = createTheme(themeOptions)

const Theme = ({ children }: { children: ReactNode }): ReactNode => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
