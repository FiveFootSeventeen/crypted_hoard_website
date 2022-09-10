import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "1rem",
  color: "black !important",
  textShadow: "none !important",
  fontWeight: 700,
  [theme.breakpoints.up('xs')]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "2.5rem",
  },
}));

const WidthGrid = styled(Grid)(({ theme }) => ({
    marginTop: "1.5rem",
    [theme.breakpoints.up('xs')]: {
      minWidth: "17rem",
    },
  }));
  
export default function AboutDesc(props) {
    return (
        <WidthGrid 
          item
          xs={12}
          md={12}
        >
            <Card
                class="rpgui-container framed-custom-5"
            >
              <Subtitle align="center">
                  {props.subtitle}
              </Subtitle>
              {props.text}
            </Card>
        </WidthGrid>
    );
}