import { useState, useEffect } from "react";

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter as Router} from 'react-router-dom';

import DungeonFont from './static/fonts/DungeonFont.ttf'
import useScript, { ScriptStatus } from '@charlietango/use-script'

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
  // eslint-disable-next-line no-unused-vars
  const [_ready, status] = useScript('./rpg_ui/rpgui.js')
  const [currTab, setCurrTab] = useState(-1);

  if (status === ScriptStatus.ERROR) {
    return <div>Failed to load script</div>
  } else {
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
}

export default App;
