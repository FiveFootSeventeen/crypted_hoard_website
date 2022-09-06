import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

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
          backgroundSize: "300px"
        }}
      >
        <Grid
          container
          nowrap
          direction="row"
          justifyContent="space-evenly"
          alignItems="top"
          style={{marginTop: "5rem"}}
          spacing={1}
        >
          <Grid item
            md={8}
            xs={8}
          >

            <Card
              class="rpgui-container framed-custom-5"
            >
              Any and all wallet information on this website is the property of The Crypted Hoard. Permission to remove funds from any wallet on this website is granted to anyone who obtains a wallet seed phrase by solving the word puzzles on the Crypted Hoard web app. Rewards from solving the Hoard puzzles are first come first serve.
            </Card>
            <Card
              class="rpgui-container framed-custom-5"
              style={{
                marginTop: "3rem",
                marginBottom: "3rem"
              }}
            >
              The AI has 
              Three illustrations in each story are done in the 
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}
