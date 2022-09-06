import React from 'react';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)(({active}) => ({
  color: "white",
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: "1.5em",
  textDecoration: active ? 'underline' : '',
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

const NavAction = (props) => {

  return (
    <React.Fragment>
      <BootstrapButton
        onClick={() => props.setCurrTab(0)}
        active={props.currTab === 0}
      >
        Hoard
      </BootstrapButton>
      <BootstrapButton
        onClick={() => props.setCurrTab(1)}
        active={props.currTab === 1}
      >
        Scrolls
      </BootstrapButton>
      <BootstrapButton
        onClick={() => props.setCurrTab(3)}
        active={props.currTab === 3}
      >
        Pool
      </BootstrapButton>
      <BootstrapButton
        onClick={() => props.setCurrTab(4)}
        active={props.currTab === 4}
      >
        About
      </BootstrapButton>
    </React.Fragment>
  )
}

export default NavAction;


