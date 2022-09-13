import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import RiddleList from './RiddleList';
import getRiddleList from '../util/getRiddleList';

import chestClosed from '../static/images/chest_closed_pixelated.png';
import chestOpen from '../static/images/chest_open_pixelated.png';

const BreakGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    margin: "1rem 1vh 0 1vh"
  },
  [theme.breakpoints.up('sm')]: {
    margin: "1rem 10vh 0 10vh"
  },
  [theme.breakpoints.up('md')]: {
    margin: "1rem 10vh 0 10vh"
  },
  [theme.breakpoints.up('lg')]: {
    margin: "1rem 20vh 0 20vh"
  },
    [theme.breakpoints.up('xl')]: {
    margin: "1rem 40vh 0 40vh"
  }
}));


const BootstrapTypography = styled(Typography)({
  color: 'black',
  width: '100%',
});

export default function Riddles(props) {
  const [open, setOpen] = useState(props.defaultOpen);
  const [chestImg, setChestImg] = useState(chestClosed);
  const [riddles, setRiddles] = useState({"wallet_addr": ""});
  const [addrLink, setAddrLink] = useState("https://pool.pm/" + riddles["wallet_addr"]);
  let validAns = props.validAns;

  useEffect(()=>{
    getRiddleList(setRiddles);
  },[])

  useEffect(()=>{
    setAddrLink("https://pool.pm/" + riddles["wallet_addr"]);
  },[riddles])

  useEffect(() => {
    if (validAns) {
      setChestImg(chestOpen);
    } else {
      setChestImg(chestClosed);
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
      <a href={addrLink} target="_blank" rel="noreferrer">
        <img 
          src={chestImg}
          alt="Hoard Chest" 
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

