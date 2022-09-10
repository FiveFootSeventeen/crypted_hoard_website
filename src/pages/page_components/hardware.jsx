import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Subtitle1 = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  fontFamily: 'Adventurer',
  [theme.breakpoints.up('xs')]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "3rem",
  },
}));

const Subtitle2 = styled(Typography)(({ theme }) => ({
  fontFamily: 'Adventurer',
  [theme.breakpoints.up('xs')]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "2rem",
  },
}));

const WidthGrid = styled(Grid)(({ theme }) => ({
    marginTop: "1.5rem",
    [theme.breakpoints.up('xs')]: {
      minWidth: "17rem",
    },
  }));
  
export default function Hardware() {
    return (
    <WidthGrid 
        item
        xs={12}
        md={12}
    >
        <Card
        class="rpgui-container framed-custom-6"
        >
        <Typography variant="poolDesc">
            <Subtitle1 align="center">
            <b>Hardware</b>
            </Subtitle1>
            <br/>
            <Subtitle2>Redundant:</Subtitle2>
            - Internet Connection
            <br/>
            - Server Power Supplies
            <br/>
            - Storage
            <br/>
            <br/>
            <Subtitle2>Enterprise-grade blade servers:</Subtitle2>
            - Bare Metal
            <br/>
            - 8 Cores
            <br/>
            - 64GB ECC Memory
            <br/>
            - 8TB Redundant HDDs (Raid 1)
            <br/>
            - UPS powering all server blades
            <br/>
            - Hot Swappable Spare Blade 
        </Typography>
        </Card>
      </WidthGrid>
    );
}