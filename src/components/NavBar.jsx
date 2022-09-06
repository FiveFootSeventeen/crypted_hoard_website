import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import NavAction from './NavAction';

const NavBar = (props) => {

  return (
    <div className="Header">
      <AppBar
        className="Center-content"
        position="static"
        color="primary"
      >
        <Toolbar color="primary">
          <NavAction
             setCurrTab={props.setCurrTab}
             currTab={props.currTab}
          />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;

