import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function CharacterCard(props) {

  return (
    <React.Fragment>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={3}
            sx={{
                margin: "2.5rem 0 2.5rem 0"
            }}
        >
            <Grid item
                md={3}
                xs={12}
                order={{ xs: 2, s: 1, md: 1, l: 1, xl: 1 }}
                sx={{
                    margin: "0 2.5rem 0 2.5rem"
                }}
            >
                <CardMedia
                  component="img"
                  image={props.characterImg}
                  sx={{
                    transform: "scale(1)",
                    border: 7,
                    borderColor: "black"
                  }}
                  alt="Loyalty Picture"
                />
            </Grid>
            <Grid item
                md={4}
                xs={12}
                order={{ xs: 1 }}
                sx={{
                    margin: "0 2.5rem 0 2.5rem"
                }}
            >
                <Card
                    class="rpgui-container framed-custom-3"
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        style={{minHeight: "10rem"}}
                    >
                        <Typography variant="body" color="text.primary">
                            {props.name}
                        </Typography>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}
