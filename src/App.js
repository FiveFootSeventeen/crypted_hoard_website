import { useState, useEffect } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import DungeonFont from './static/fonts/DungeonFont.ttf';
import Adventurer from './static/fonts/Adventurer.ttf';

import './App.css';
import './rpg_ui/rpgui.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Page from './Page';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: 'DungeonFont',
    poolDesc: {
      fontFamily: 'Adventurer',
    },
    body: {
      fontSize: 20
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [DungeonFont],
        'color': 'white',
        'MuiAutocomplete-option': {
          cursor: "url('./cursor/point.png') 10 0, auto !important"
        },
      },
      styleOverrides: `
        @font-face {
          font-family: 'Adventurer';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Adventurer'), url(${Adventurer}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        `,
    },
  },
});



function App() {
  const [currTab, setCurrTab] = useState(-1);

  useEffect(() => {
    const script = document.createElement('script');
    
    script.src = './rpg_ui/rpgui.js';
    script.async = true;
    
    document.body.appendChild(script);
  }, []);


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App-body rpgui-content" >
          <NavBar
            setCurrTab={setCurrTab}
            currTab={currTab}
          />
          <Page
            setCurrTab={setCurrTab}
            currTab={currTab}
          />
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
