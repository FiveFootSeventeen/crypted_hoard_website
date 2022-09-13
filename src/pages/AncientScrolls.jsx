import React, { useState } from "react";

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import backgroundImg from "../static/images/stone_limited.png";

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
              The Ancient Scrolls are pixel art NFT stories on unrolling scrolls!
              They consist of two separate AI generated story collections: Ancient Grimms and Ancient Tales.
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
                  image="/images/animated_example.webp"
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
            style={{marginTop: "2rem"}}
            spacing={1}
          >
            <WidthGrid item
              md={4}
              xs={12}
            >

              <Card
                class="rpgui-container framed-custom-2"
                style={{
                  marginTop: "3rem",
                  marginBottom: "3rem"
                }}
              >
              <h2>Ancient Grimms</h2>
              2048 AI created story scrolls based off Grimm’s fairy tales and an exclusive word from the BIP 39 word list (The word list used to generate your crypto wallet). These are available for purchase at 100 ADA each. Each story starts with a unique illustration of the AI’s interpretation of the following paragraph, a random prompt, then AI generated content and accompanying illustrations.
              </Card>
            </WidthGrid>
            <MediaGrid item
              md={4}
              xs={12}
            >

              <Card
                class="rpgui-container framed-custom-3"
              >
                <CardMedia
                  component="img"
                  image="/images/example_image_1.png"
                  sx={{
                    transform: "scale(0.8)",
                    border: 7,
                    borderColor: "black"
                  }}
                  alt="Ancient Grimm NFT Example 1"
                />
              </Card>
            </MediaGrid>
          </BreakGrid>
          <BreakGrid
            container
            item
            nowrap
            direction="row-reverse"
            justifyContent="space-evenly"
            alignItems="center"
            style={{marginTop: "2rem"}}
            spacing={1}
          >
            <WidthGrid item
              md={4}
              xs={12}
            >

              <Card
                class="rpgui-container framed-custom-2"
                style={{
                  marginTop: "3rem",
                  marginBottom: "3rem"
                }}
              >
                <h2>Ancient Tales</h2>
                256 separate stories based off unique fairy and folk tales. 
                These stories are laid out in the same way as Ancient Grimm’s, however each prompt here is taken from a unique folk story. 
                These NFTs can't be purchased and will only be available by solving the Crypted Hoard, distributed to those who stake to Hoard Stakepool, or purchased in secondary markets.
              </Card>
            </WidthGrid>
            <MediaGrid item
              md={4}
              xs={12}
            >

              <Card
                class="rpgui-container framed-custom-3"
              >
                <CardMedia
                  component="img"
                  image="/images/example_image_1.png"
                  sx={{
                    transform: "scale(0.8)",
                    border: 7,
                    borderColor: "black"
                  }}
                  alt="Ancient Tale NFT Example 1"
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
              <a href="http://www.google.com" target="_blank" rel="noreferrer">
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
