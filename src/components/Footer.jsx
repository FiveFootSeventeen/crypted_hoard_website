import React from 'react';

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';


const BootstrapButton = styled(Button)(({active}) => ({
  color: "white",
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: "1.5em",
  borderRadius: 0,
  marginLeft: '1rem',
  marginRight: '1rem',
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


const Footer = (props) => {

  return (
      <AppBar
        className="Center-content"
        position="static"
      >
        <Toolbar>
          <BootstrapButton>
            Twitter
          </BootstrapButton>
          <BootstrapButton>
            Youtube
          </BootstrapButton>
          <BootstrapButton>
            AdaPools
          </BootstrapButton>
        </Toolbar>
      </AppBar>
  )
}

export default Footer;

