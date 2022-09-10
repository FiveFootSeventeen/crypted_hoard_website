import React, { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';

import SponsorDisplay from '../components/SponsorDisplay';
import Riddles from '../components/Riddles';

export default function CryptedHoard() {
  const [open, setOpen] = useState(true);
  const [validAns, setValidAns] = useState(false);
  const [bckImgLink, setBckImgLink] = useState("url('./images/wood_planks.png')");

  useEffect(() => {
    if (validAns) {
      setBckImgLink("url('./images/tiled_gold_coins.png')")
    } else {
      setBckImgLink("url('./images/wood_planks.png')")
    }
  }, [validAns])

  return (
    <React.Fragment>

      <Paper
        elevation={3}
        sx={{
          width: "80vw",
          minHeight: "90vh",
          padding: "0 0 5rem 0",
          display: "flex",
          justifyContent: "center",
          backgroundImage: bckImgLink,
          backgroundSize: "240px"
        }}
      >
        <Riddles
          setValidAns={setValidAns}
          validAns={validAns}
        />
      </Paper>

      <SponsorDisplay
        defaultOpen={false}
      />
    </React.Fragment>
  );
}

