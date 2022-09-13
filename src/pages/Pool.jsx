import React from 'react';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import Reason from './page_components/reason';
import Hardware from './page_components/hardware';

import backgroundImg from "../static/images/water_2.png";

const Title = styled(Typography)(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "1rem",
  fontFamily: 'Adventurer',
  lineHeight: '2rem !important',
  [theme.breakpoints.up('xs')]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up('md')]: {
    fontSize: "2.5rem",
  },
}));

const BootstrapTypography = styled(Typography)({
  color: 'black',
  width: '100%',
});

const BreakGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    margin: "0 5vw 0 5vw"
  },
  [theme.breakpoints.up('sm')]: {
    margin: "0 8vw 0 8vw"
  },
  [theme.breakpoints.up('md')]: {
    minWidth: "40rem",
  },

}));


export default function Pool() {

  return (
    <React.Fragment>
      <Paper
        elevation={3}
        sx={{
          width: "80vw",
          minHeight: "90vh",
          color: "white",
          padding: "0 0 5vh 0",
          display: "flex",
          justifyContent: "center",
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "230px",
        }}
      >
        <BreakGrid
          container
          nowrap
          direction="row"
          justifyContent="space-evenly"
          alignItems="top"
          spacing={2}
        >
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
          >
            <BootstrapTypography class="rpgui-container framed-custom-3" variant="h1">
              Hoard Stakepool
            </BootstrapTypography>
          </BreakGrid>
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
          >
            <Card
              class="rpgui-container framed-custom-6"
            >
              <Typography variant="poolDesc">
                <Title>
                  Why stake your ADA with [HORDE]&nbsp;?
                </Title>
              </Typography>
            </Card>
          </BreakGrid>
          <BreakGrid
            container
            item
            nowrap
            direction="row"
            justifyContent="space-evenly"
            alignItems="top"
          >
            <Reason
              text="Bare metal nodes with redundant drives and hardware specs better than recommended values."
              subtitle="Bare Metal"
              image="/images/pool/ship_1_sm.png"
            />
            <Reason
              text="Uninterruptable power supplies keep the pool running for over an hour in the event of a power outage. Redundent hot-swappable power supplies keep nodes running smoothly should a power supply fail."
              subtitle="Redundency"
              image="/images/pool/wind_cloud_sm.png"
            />
            <Reason
              text="Horde pool is actively developing and maintaing web apps for community use."
              subtitle="Community"
              image="/images/pool/pirate_face_sm.png"
            />
            <Reason
              text="This pool is comitted to keeping the Cardano network decentralized and strives to be online 100% of the time."
              subtitle="Decentralization"
              image="/images/pool/ada_symbol_sm.png"
            />
            <Reason
              text="A firewall, VPN, and access only via private keys keep this pool extra secure."
              subtitle="Security"
              image="/images/pool/pixel_sea_monster_sm.png"
            />
            <Reason
              text="25% of Horde pool rewards are donated to reliable charities to help impoverished people."
              subtitle="Charity"
              image="/images/pool/pixel_life_preserver_sm.png"
            />
            <Reason
              text="A dedicated machine is kept offline and used to sign all transactions, all pool keys are kept in cold storage on USB drives."
              subtitle="Cold Storage"
              image="/images/pool/pixel_desert_island_sm.png"
            />
            <Hardware/>
            <Reason
              subtitle="Is my ADA safe?"
              text="Yes, funds never leave your wallet at any time and stake pool operators do not have access to the funds staked to their pool."
            />
            <Reason
              subtitle="How to Delegate?"
              text="In the staking section of your wallet search for HOARD, hit delegate, confirm the transaction, and submit. There is a small fee to delegate and you must have at least 5 ADA in your wallet."
            />
          </BreakGrid>
        </BreakGrid>
      </Paper>
    </React.Fragment>
  );
}

