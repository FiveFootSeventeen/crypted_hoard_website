import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import AboutDesc from './page_components/about_desc';

const BootstrapTypography = styled(Typography)({
  color: 'black',
  width: '100%',
});

const WidthGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    minWidth: "17rem",
  },
}));

const BreakGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    margin: "0 5vw 0 5vw"
  },
  [theme.breakpoints.up('sm')]: {
    margin: "0 8vw 0 8vw"
  },
  [theme.breakpoints.up('md')]: {
    minWidth: "40rem",
  },

}));

export default function About() {

  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{
          width: "80vw",
          minHeight: "90vh",
          padding: "0 0 5vh 0",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage: "url('./images/brickwork.png')",
          backgroundSize: "240px"
        }}
      >
        <BreakGrid
          container
          nowrap
          direction="row"
          justifyContent="space-evenly"
          alignItems="top"
          spacing={1}
        >
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
            alignItems="top"
          >
            <BootstrapTypography class="rpgui-container framed-custom-3" align="center" variant="h1">
              About
            </BootstrapTypography>
          </BreakGrid>
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
            alignItems="top"
          >
            <AboutDesc
              subtitle="How To Play"
              text="Play the Crypted Hoard by entering in the correct BIP 39 keyword for all the riddles. Once all the riddles have been solved the background image will change indicating the correct answers have been entered. Now enter the BIP 39 words into a Cardano wallet (ex. Eternl) in the same order and transfer the reward to your personal wallet."
            />
            <AboutDesc
              subtitle="Legal"
              text="Any and all wallet information on this website is the property of The Crypted Hoard. Permission to remove funds from any wallet on this website is granted to anyone who obtains a wallet seed phrase by solving the word puzzles on the Crypted Hoard web app. Rewards from solving the Hoard puzzles are first come first serve. Meaning, if a player is first to solve the puzzle and doesnt transfer funds out of the Crypted Hoard wallet before someone else, the initial winning player loses those funds."
            />
            <AboutDesc
              subtitle="Questions?"
              text="Contact: anodos@cryptedhoard.com"
            />
          </BreakGrid>
        </BreakGrid>
      </Paper>
    </React.Fragment>
  );
}
