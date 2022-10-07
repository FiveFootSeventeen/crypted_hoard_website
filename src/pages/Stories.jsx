import React, { useState, useEffect } from "react";

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import { getStoryDirListing, getStory } from '../util/getData';
import backgroundImg from "../static/images/stone_limited.png";

const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "1rem",
  color: "black !important",
  textShadow: "none !important",
  [theme.breakpoints.up('xs')]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "3rem",
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


export default function Stories(props) {
  const [dirList, setDirList] = useState();
  const [storyJson, setStoryJson] = useState({"story": "", "prompt": ""});
  const [story, setStory] = useState("");
  const [prompt, setPrompt] = useState("");

  useEffect(()=>{
    getStory(setStoryJson, props.story);
  },[])

  useEffect(()=>{
    getStoryDirListing(setDirList);
  },[])

  useEffect(()=>{
    setStory((storyJson["story"] || "Story not found"));
    setPrompt((storyJson["prompt"] || "Prompt not found"));
  },[storyJson])

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
          justifyContent="flex-start"
          alignItems="center"
          md={6}
          xs={12}
          spacing={4}
        >
          <Grid item>
            <Card
              class="rpgui-container framed-custom-2"
            >
              <Subtitle align="center">
                  Prompt
              </Subtitle>
              {prompt}
            </Card>
          </Grid>
          <Grid item>
            <Card
              class="rpgui-container framed-custom-2"
            >
              <Subtitle align="center">
                  Story
              </Subtitle>
              {story}
            </Card>
          </Grid>
        </BreakGrid>

      </Paper>
    </React.Fragment>
  );
}
