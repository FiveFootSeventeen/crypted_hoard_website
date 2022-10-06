import React, { useState, useEffect } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import ComputeAnswers from './ComputeAnswers';
import bip39 from '../static/bip39/english.json';
import { getRiddleList } from '../util/getData';

import cursorPoint from "../static/images/point.png";
import cursorDefault from "../static/images/default.png";

const CssTextField = styled(TextField)(() => ({
  "& label": {
    fontSize: "1.3rem",
  },
  // input label when focused
  "& label.Mui-focused": {
    color: "white",
  },
  // Square textfield background
  '& fieldset': {
    borderRadius: 0,
    borderWidth: 7,
  },
  "& .MuiAutocomplete-inputRoot": {
    padding: "0.7rem"
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    cursor: `url(${cursorPoint}) 10 0, auto !important`,
    "&.Mui-focused fieldset": {
      borderColor: "black",
      borderWidth: 7,
    }
  },
}));


export default function RiddleList(props) {
  const [answers, setAnswers] = useState({});
  const [riddles, setRiddles] = useState({"sha256sum": "0xDEADBEEF", "riddles": []});
  const [riddleList, setRiddleList] = useState([]);
  const setValidAns = props.setValidAns;

  useEffect(()=>{
    getRiddleList(setRiddles);
  },[])

  useEffect(() => {
    setValidAns(ComputeAnswers(answers, riddles["sha256sum"]));
  }, [answers, setValidAns, riddles])

  useEffect(() => {
    setRiddleList(riddles["riddles"].map((riddle) =>
          <Grid
            item
            sx={{
              width: '80%'
            }}
          >
            <Card
              class="rpgui-container framed-custom-4"
            >
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid item
                  md={4}
                  xs={12}
                  style={{minWidth: "10rem"}}
                >
                  <CardContent>
                    <Autocomplete
                      sx={{
                        width: '100%',
                      }}
                      autoHighlight
                      disablePortal
                      onChange={(event, newValue) => {
                        setAnswers(prevAnswers => ({
                          ...prevAnswers,
                          [riddle['order']]: newValue
                        }));
                      }}
                      ListboxProps={{
                        sx: {
                          "& li": { 
                            paddingLeft: "0 !important",
                          },
                          '&:hover': {
                            cursor: `url(${cursorPoint}) 10 0, auto !important`,
                          },
                          "& .MuiAutocomplete-option": {
                            cursor: `url(${cursorPoint}) 10 0, auto !important`,
                          }
                        }
                      }}
                      PaperComponent={({ children }) => (
                        <Paper
                          sx={{
                            // eslint-disable-next-line no-dupe-keys
                            "imageRendering": "-webkit-optimize-contrast",
                            // eslint-disable-next-line no-dupe-keys
                            "imageRendering": "-webkit-crisp-edges",
                            // eslint-disable-next-line no-dupe-keys
                            "imageRendering": "-moz-crisp-edges",
                            // eslint-disable-next-line no-dupe-keys
                            "imageRendering": "-o-crisp-edges",
                            // eslint-disable-next-line no-dupe-keys
                            "imageRendering": "pixelated",
                            "cursor": `url(${cursorDefault}) 10 0, auto !important`,
                            "fontSize": "1.2rem"
                          }}
                        >
                          <div
                            class="rpgui-container framed-custom-1"
                          >
                            {children}
                          </div>
                        </Paper>
                      )}
                      id={`riddle-input-${riddle['order']}`}
                      options={bip39}
                      renderInput={(params) =>
                        <CssTextField
                          {...params}
                          label={"Word " + riddle['order']}
                        />
                      }
                    />
                  </CardContent>
                </Grid>
                <Grid
                  item
                  md={8}
                  xs={12}
                >
                  <Typography variant="body" color="text.primary">
                    {riddle["riddle"]}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
      )
    )
  }, [riddles])


  return (
    <React.Fragment>
      {riddleList}
    </React.Fragment>
  );
}
