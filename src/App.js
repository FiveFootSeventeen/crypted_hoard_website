import { useState, useEffect } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import DungeonFont from './static/fonts/DungeonFont.ttf'

import './App.css';
import './rpg_ui/rpgui.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Page from './Page';
import pool_meta from './static/pool_meta.json';

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
