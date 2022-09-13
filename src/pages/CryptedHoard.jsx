import React, { useState, useEffect } from 'react';

import Paper from '@mui/material/Paper';

import SponsorDisplay from '../components/SponsorDisplay';
import Riddles from '../components/Riddles';

import goldCoins from "../static/images/tiled_gold_coins.png";
import woodPlanks from "../static/images/wood_planks.png";

export default function CryptedHoard() {
  const [open, setOpen] = useState(true);
  const [validAns, setValidAns] = useState(false);
  const [bckImgLink, setBckImgLink] = useState(woodPlanks);

  useEffect(() => {
    if (validAns) {
      setBckImgLink(goldCoins)
    } else {
      setBckImgLink(woodPlanks)
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
          backgroundImage: `url(${bckImgLink})`,
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

