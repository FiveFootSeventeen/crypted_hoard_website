import React from 'react';
import { useState, useEffect} from "react";

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import CharacterCard from './CharacterCard';

import backgroundImg from "../../static/images/stone_limited.png";

import loyaltyPicture from "../../static/images/test_loyalty_picture.png"
import loyaltyPicture2 from "../../static/images/test_loyalty_picture_2.png"
import loyaltyPicture3 from "../../static/images/test_loyalty_picture_3.png"

import { getDelegates } from '../../util/getData';

const BootstrapTypography = styled(Typography)({
  color: 'black',
  width: '100%',
});

const BreakGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    margin: "0 5vw 0 5vw"
  },
  [theme.breakpoints.up('sm')]: {
    margin: "0 2vw 0 2vw"
  },
  [theme.breakpoints.up('md')]: {
    minWidth: "40rem"
  },

}));

export default function Delegates() {
  const [characterLst, setCharacterLst] = useState([]);
  const [delegateLst, setDelegateLst] = useState([]);

  const testDelegates = [
    {"name": "Kargetrude Blazingshoulder", "image": loyaltyPicture},
    {"name": "Momwaegrett Chaosbelly", "image": loyaltyPicture2},
    {"name": "Dhokhosli Barbeddelver", "image": loyaltyPicture3}
  ]

  useEffect(() => {
    delegateLst.map((delegate) =>
      <CharacterCard
        name={delegate.name}
        characterImg={delegate.image}
      />
    )
  }, [delegateLst]);

  useEffect(() => {
    getDelegates(setDelegateLst)
  }, []);


  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{
          width: "80vw",
          minHeight: "90vh",
          padding: "5rem 0 5vh 0",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "760px"
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          {characterLst}
        </Grid>
      </Paper>
    </React.Fragment>
  );
}