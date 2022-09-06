import React from 'react';
import Paper from '@mui/material/Paper';

export default function AncientTomes() {

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
          backgroundSize: "300px",
          backgroundImage: "url('./images/mossy_stones.png')",
        }}
      >
        <div
          style={{fontSize: '5em'}}
        >
          Ancient Tomes
          <br/>
          Under Construction
        </div>
      </Paper>
    </React.Fragment>
  );
}

