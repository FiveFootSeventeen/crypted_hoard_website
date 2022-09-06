import CryptedHoard from './pages/CryptedHoard';
import AncientScrolls from './pages/AncientScrolls';
import AncientTomes from './pages/AncientTomes';
import Stakepool from './pages/Pool';
import About from './pages/About';
import React from "react";
import { useLocation } from 'react-router-dom';

function Page(props) {
  const TabCryptedHoard = 0;
  const TabAncientScrolls = 1;
  const TabAncientTomes = 2;
  const TabStakepool = 3;
  const TabAbout = 4;

  const possibleTabs = [TabCryptedHoard, TabAncientScrolls, TabAncientTomes, TabStakepool, TabAbout];

  let location = useLocation();
  let currTab = props.currTab;

  if (currTab == -1) {
    switch (location['pathname']) {
      case "/":
        currTab = TabCryptedHoard;
        props.setCurrTab(TabCryptedHoard);
        break;
      case "/scrolls":
        currTab = TabAncientScrolls;
        props.setCurrTab(TabAncientScrolls);
        break;
      case "/pool":
        currTab = TabStakepool;
        props.setCurrTab(TabStakepool);
        break;
      case "/about":
        currTab = TabAbout;
        props.setCurrTab(TabAbout);
        break;
      default:
        currTab = TabCryptedHoard;
        props.setCurrTab(TabCryptedHoard);
    }
  }

  if (!possibleTabs.includes(currTab)) {
    currTab = TabCryptedHoard;
  }
  
  return (
    <header className="App-header">
      { currTab===TabCryptedHoard &&
        <CryptedHoard/>
      }
      { currTab===TabAncientScrolls &&
        <AncientScrolls/>
      }
      { currTab===TabAncientTomes &&
        <AncientTomes/>
      }
      { currTab===TabStakepool &&
        <Stakepool/>
      }
      { currTab===TabAbout &&
        <About/>
      }

    </header>
  )
}

export default Page;


