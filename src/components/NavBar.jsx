import { useState, useEffect} from "react";
import React from "react";

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)(({active, theme}) => ({
  [theme.breakpoints.up('xs')]: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '2rem',
    marginRight: '2rem',
    fontSize: "2.2rem",
  },
  color: "white",
  boxShadow: 'none',
  textTransform: 'none',
  textDecoration: active ? 'underline' : '',
  borderRadius: 0,
  fontFamily: [
    'DungeonFont',
  ].join(','),
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: 'rgba(255,255,255,.25)',
    borderColor: 'rgba(255,255,255,.25)',
    textDecoration: active ? 'underline' : '',
    borderRadius: 0,
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'rgba(255,255,255,.25)',
    borderColor: 'rgba(255,255,255,.25)',
    textDecoration: active ? 'underline' : '',
    borderRadius: 0,
  },
}));

const NavBar = (props) => {
  const [buttonLst, setButtonLst] = useState([]);

  useEffect(() => {
    setButtonLst(props.tabLst.filter((tab) => !tab.hidden).map((tab) =>
        <BootstrapButton
          onClick={() => {
              props.setCurrTab(tab.number);
              window.history.replaceState(null, null, tab.route ? `/${tab.route.toLowerCase()}` : `/${tab.name.toLowerCase()}`);
            }}
          active={props.currTab === tab.number}
        >
          {tab.name}
        </BootstrapButton>
      )
    )
  }, [props.currTab])

  return (
    <div className="Header">
      <AppBar
        className="Center-content"
        position="static"
        color="primary"
      >
        <Toolbar color="primary">
          {buttonLst}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;
