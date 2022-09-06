import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import RiddleList from './RiddleList';
import riddles from '../static/riddles.json';


const BreakGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    margin: "2rem 1vh 0 1vh"
  },
  [theme.breakpoints.up('sm')]: {
    margin: "5vh 10vh 0 10vh"
  },
  [theme.breakpoints.up('md')]: {
    margin: "5vh 10vh 0 10vh"
  },
  [theme.breakpoints.up('lg')]: {
    margin: "5vh 20vh 0 20vh"
  },
    [theme.breakpoints.up('xl')]: {
    margin: "5vh 40vh 0 40vh"
  }
}));


const BootstrapTypography = styled(Typography)({
  color: 'black',
  width: '100%',
});

export default function Riddles(props) {
  const [open, setOpen] = useState(props.defaultOpen);
  const [addrLink, setAddrLink] = useState("https://pool.pm/" + riddles["wallet_addr"]);
  const [chestLink, setChestLink] = useState("./images/chest_closed_pixelated.png");
  let validAns = props.validAns;

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (validAns) {
      setChestLink("./images/chest_open_pixelated.png");
    } else {
      setChestLink("./images/chest_closed_pixelated.png");
    }
  }, [validAns])

  var answers =
    <BreakGrid
      container
      nowrap
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <BootstrapTypography class="rpgui-container framed-custom-3" align="center" variant="h1">
        The Crypted Hoard
      </BootstrapTypography>
      <a href={addrLink} target="_blank">
        <img 
          src={chestLink}
          alt="Crypted Hoard Chest" 
          style={{
            width: "10rem",
          }}
        />
      </a>
      <RiddleList
        setValidAns={props.setValidAns}
      />
    </BreakGrid>



  return (
    answers
  );
}

