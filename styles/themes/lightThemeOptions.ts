import { createTheme } from '@mui/material/styles'



const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#111827',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})

export default lightTheme


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  // interface ThemeOptions {
  //   status: {
  //     danger: React.CSSProperties['color'];
  //   };
  // }
}
