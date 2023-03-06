import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import backgroundImg from "../../static/images/stone_limited.png";


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

export default function Delegate() {

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
              Character
            </BootstrapTypography>
          </BreakGrid>
        </Grid>

      </Paper>
    </React.Fragment>
  );
}