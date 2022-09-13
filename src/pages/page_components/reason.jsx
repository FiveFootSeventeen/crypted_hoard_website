import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Subtitle = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "1rem",
  fontFamily: 'Adventurer',
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
  
export default function Reason(props) {
    return (
        <WidthGrid 
          item
          xs={12}
          md={12}
        >
            <Card
                class="rpgui-container framed-custom-6"
            >
              <Grid
              container
              nowrap
              direction="row"
              justifyContent="center"
              alignItems="center"
              >
                { props.image &&
                <Grid 
                    item
                    md={3}
                >
                    <img 
                    src={props.image} 
                    style={{
                        height: "7rem"
                    }}
                    alt={props.subtitle + " image"}
                    />
                </Grid>
                }
                <Grid 
                    item
                    md={9}
                >
                    <Subtitle align="center">
                        <b>{props.subtitle}</b>
                    </Subtitle>
                    <Typography variant="poolDesc">
                      {props.text}
                    </Typography>
                </Grid>
              </Grid>
            </Card>
        </WidthGrid>
    );
}