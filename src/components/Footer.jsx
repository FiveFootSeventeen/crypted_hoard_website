import React from 'react';

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

const BootstrapButton = styled(Button)(({ theme }) => ({
  color: "white",
  boxShadow: 'none',
  textTransform: 'none',
  borderRadius: 0,
  textDecoration: 'none',
  [theme.breakpoints.up('xs')]: {
    fontSize: "1.2rem",
    marginLeft: '.25rem',
    marginRight: '.25rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "2.5rem",
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "2.5rem",
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  fontFamily: [
    'DungeonFont',
  ].join(','),
  '&:visited': {
    color: "white",
    textDecoration: 'none',
  },
  '&:link': {
    color: "white",
    textDecoration: 'none',
  },
  '&:hover': {
    color: "white",
    textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
    boxShadow: 'none',
    textDecoration: 'none',
    borderRadius: 0,
  },
  '&:active': {
    color: "white",
    boxShadow: 'none',
    textDecoration: 'none',
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
            AdaPools
          </BootstrapButton>
          <BootstrapButton target="_blank" href="https://twitter.com/CryptedHoard">
            Twitter
          </BootstrapButton>
          <BootstrapButton target="_blank" href="https://www.youtube.com/channel/UCYN_DyBzoGvNbJgTdnJ9A3Q">
            Youtube
          </BootstrapButton>
          <BootstrapButton target="_blank" href="https://adalator.com/">
            Adalator
          </BootstrapButton>
        </Toolbar>
      </AppBar>
  )
}

export default Footer;

