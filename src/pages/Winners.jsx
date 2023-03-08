import React, { useState, useEffect } from "react";

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { getWinners } from '../util/getData';
import backgroundImg from "../static/images/stone_limited.png";

const BootstrapButton = styled(Button)(({ theme }) => ({
  color: "white",
  boxShadow: 'none',
  textTransform: 'none',
  borderRadius: 0,
  textDecoration: 'none',
  [theme.breakpoints.up('xs')]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "2.3rem",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "2.5rem",
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


const Subtitle = styled(Typography)(({ theme }) => ({
  margin: "1rem",
  marginBottom: "1rem",
  color: "black !important",
  textShadow: "none !important",
  fontFamily: [
    'Antiquity',
  ],
  [theme.breakpoints.up('xs')]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "2rem",
  },
}));

const BreakGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    padding: ".5rem",
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up('sm')]: {
    padding: "1rem",
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up('md')]: {
    minWidth: "40rem",
    fontSize: "1.5rem",
  },

}));


export default function Winners(props) {
  const [dirList, setDirList] = useState();
  const [winnersJson, setWinnersJson] = useState([{"story": "", "prompt": "", "title": null}]);
  const [winnerList, setWinnerList] = useState([]);

  useEffect(()=>{
    getWinners(setWinnersJson, props.epoch);
  },[])

  useEffect(()=>{
    console.log(winnerList);
  },[winnerList])


  useEffect(() => {
    setWinnerList(winnersJson.map((winner, index) => 
      <Card
        class="rpgui-container framed-custom-3"
        style={{
          marginBottom: "3rem"
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid
            item
            xs={4}
             sx={{
               margin: ".25rem 0 .25rem 0",
               paddingLeft: "1rem"
             }}
          >
            <BootstrapButton target="_blank" href={winner.poolpm_winner_addr}>
              Winner {index + 1}
            </BootstrapButton>
          </Grid>
          <Grid
           item
           xs={4}
           sx={{
             margin: ".25rem 0 .25rem 0",
           }}
          >
            Stake: {Math.floor(winner.live_stake / 1000000)}
          </Grid>
          <Grid item
            xs={6}
          >
            <BootstrapButton target="_blank" href={winner.poolpm_nft_addr}>
              <CardMedia
                component="img"
                image={winner.nft_arweave_addr}
                sx={{
                  transform: "scale(1)",
                  border: 7,
                  borderColor: "black",
                }}
              />
            </BootstrapButton>
          </Grid>
        </Grid>
      </Card>
    ))
  }, [winnersJson])


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
        <BreakGrid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          spacing={4}
        >
          <Grid item>
            <Card
              class="rpgui-container framed-custom-2"
              style={{
                padding: "0 6rem 0 6rem",
              }}
            >
              <Subtitle
                align="center"
                sx={{
                  marginTop: "2rem",
                  marginBottom: "4rem"
                }}
              >
                  Epoch {props.epoch} Winners
              </Subtitle>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                {winnerList}
              </Grid>
            </Card>
          </Grid>
        </BreakGrid>

      </Paper>
    </React.Fragment>
  );
}
