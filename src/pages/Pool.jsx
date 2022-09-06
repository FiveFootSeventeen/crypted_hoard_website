import React from 'react';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export default function Pool() {

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
          backgroundImage: "url('./images/water.png')",
          backgroundSize: "204px"
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
              class="rpgui-container framed-custom-6"
            >
              This is test text for the stakepool
            </Card>
            <Card
              class="rpgui-container framed-custom-6"
              style={{
                marginTop: "3rem",
                marginBottom: "3rem"
              }}
            >
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

