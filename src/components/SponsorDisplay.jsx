import React, { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import SponsorList from './SponsorList';

export default function SponsorDisplay(props) {
  const [open, setOpen] = useState(props.defaultOpen);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      className="rpgui-content"
      fullWidth={true}
      maxWidth="md"
      open={open}
      onClose={handleClose}
      PaperProps={{className: "rpgui-container framed"}}
    >
      <DialogTitle className="rpgui-container framed-golden-2" sx={{ fontSize:  "2em" }}>Sponsors</DialogTitle>
      <DialogContent>
        <SponsorList/>
      </DialogContent>
      <DialogActions>
        <div class="rpgui-center">
          <Button className="rpgui-button golden" disableRipple={true} onClick={handleClose}><p>Close</p></Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}

