import React, { useState } from "react";

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import backgroundImg from "../static/images/stone_limited.png";
import animatedExample from "../static/images/animated_example.webp";

const BootstrapTypography = styled(Typography)({
  color: 'black',
  width: '100%',
});

const MediaGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    maxWidth: "100%"
  },
  [theme.breakpoints.up('sm')]: {
    minWidth: "20rem",
    maxWidth: "70%"
  },
  [theme.breakpoints.up('md')]: {
    minWidth: "25rem",
  },
}));

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
    margin: "0 2vw 0 2vw"
  },
  [theme.breakpoints.up('md')]: {
    minWidth: "40rem"
  },

}));


export default function AncientScrolls() {
  const [mintButton, setMintButton] = useState("./images/mint_now_btn/mint_now_btn1.png");

  function onMouseEnter() {
    setMintButton("./images/mint_now_btn/mint_now_btn2.png");
  }
  function onMouseLeave() {
    setMintButton("./images/mint_now_btn/mint_now_btn1.png");
  }
  
  function onMouseDown() {
    setMintButton("./images/mint_now_btn/mint_now_btn3.png");
  }
  
  function onMouseUp() {
    setMintButton("./images/mint_now_btn/mint_now_btn2.png");
  }

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
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "760px"
        }}
      >
        <Grid
          container
          nowrap
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={1}
        >
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <BootstrapTypography class="rpgui-container framed-custom-3" variant="h1">
              The Ancient Scrolls
            </BootstrapTypography>
          </BreakGrid>
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            md={6}
            xs={12}
          >
            <Card
              class="rpgui-container framed-custom-2"
            >
              <h2>The Ancient Scrolls are pixel art NFT stories on unrolling scrolls!</h2>
              - Each scroll contains a story written by an AI. 
              <br/>
              - Each story is generated from a base prompt which can be from one of the following themes, in order or rarity: Fairy Tale, Science Fiction, Classic Novels, Myths and Legends, Sherlock Holmes, Jane Austen and Charles Hoskinson.
              <br/>
              - To make stories more interesting spices are thrown in, such as goblins, unicorns, hipsters, ninjas, and robots. These spices can be seen in the illuminated illustration at the start of each paragraph.
              <br/>
              - Stories are illustrated with one illustration per paragraph, 3-5 illustrations total. These illustrations are also done by an AI. For each paragraph 6 illustrations are created and the best fitting one is hand selected.
              <br/>
              - A score at the start of the story gives an idea of how rare that particular story is. Scores are given based on length, story type, number of illustrations, and several other factors.
            </Card>
          </BreakGrid>
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            style={{marginTop: "2rem"}}
          >
            <MediaGrid item
              md={3}
              xs={12}
            >

              <Card
                class="rpgui-container framed-custom-3"
              >
                <CardMedia
                  component="img"
                  image={animatedExample}
                  sx={{
                    transform: "scale(1)",
                    border: 7,
                    borderColor: "black"
                  }}
                  alt="Animated Ancient Grimm NFT"
                />
              </Card>
            </MediaGrid>
          </BreakGrid>
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            md={6}
            xs={12}
            style={{marginTop: "2rem"}}
          >
            <Card
              class="rpgui-container framed-custom-2"
            >
              The tale on each scroll is written nearly entirely by an AI. 
              A model different from the one used for story generation has been used to check the stories for content related to racism, harassment, self-harm, violence, sexual content and other disturbing/undesirable categories. 
              This does not guarantee these stories will not contain content that will not be triggering or offensive to some. 
              Many of these stories are based off fairy tales from the 1800’s or earlier and the originals are often dark and have harsh outcomes, as a consequence, so do many of these.
            </Card>
          </BreakGrid>
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            md={6}
            xs={12}
            style={{marginTop: "2rem"}}
          >
            <Card
              class="rpgui-container framed-custom-2"
            >
              Also keep in mind that the AI is terrible at grammar, spelling, and common sense. 
              You may get a story that ends telling you that it was made into a movie in 2020 or random garbled letters and words. 
              These “Happy Accidents” generally make for unique stories and sometimes funny endings.
            </Card>
          </BreakGrid>
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            md={6}
            xs={12}
            style={{marginTop: "2rem"}}
          >
            <Card
              class="rpgui-container framed-custom-2"
            >
              Have fun, and read the Ancient Scrolls!
            </Card>
            <button 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              style={{
                marginTop: "2rem",
                backgroundColor: "transparent",
                backgroundRepeat: "no-repeat",
                border: "none",
                overflow: "hidden",
                outline: "none",
                width: "90%",
                maxWidth: "30rem",
              }}
            >
              <a href="https://pay.nmkr.io/?p=d0579469e8ce40b08d5da5dd25bd3e8b&c=1" target="_blank" rel="noreferrer">
                <img 
                  src={mintButton}
                  style={{
                    width: "100%"
                  }}
                  alt="Ancient Scrolls Mint Button"
                />
              </a>
            </button>
          </BreakGrid>
        </Grid>

      </Paper>
    </React.Fragment>
  );
}
