import CryptedHoard from './pages/CryptedHoard';
import AncientScrolls from './pages/AncientScrolls';
import AncientTomes from './pages/AncientTomes';
import Stories from './pages/Stories';
import Winners from './pages/Winners';
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
  const TabStories = 5;
  const TabWinners = 6;

  const possibleTabs = [TabCryptedHoard, TabAncientScrolls, TabAncientTomes, TabStakepool, TabAbout, TabStories, TabWinners];

  const location = useLocation();
  let currTab = props.currTab;

  let loc = location['pathname'].split('/');
  if (loc[0] == '') {
    loc = loc.splice(1, loc.length);
  }

  if (currTab === -1) {
    switch (loc[0]) {
      case "":
        currTab = TabCryptedHoard;
        props.setCurrTab(TabCryptedHoard);
        break;
      case "scrolls":
        currTab = TabAncientScrolls;
        props.setCurrTab(TabAncientScrolls);
        break;
      case "pool":
        currTab = TabStakepool;
        props.setCurrTab(TabStakepool);
        break;
      case "about":
        currTab = TabAbout;
        props.setCurrTab(TabAbout);
        break;
      case "stories":
        currTab = TabStories;
        props.setCurrTab(TabStories);
        break;
      case "winners":
        currTab = TabWinners;
        props.setCurrTab(TabWinners);
        break;
      default:
        currTab = TabCryptedHoard;
        props.setCurrTab(TabCryptedHoard);
    }
  }

  if (!possibleTabs.includes(currTab)) {
    currTab = TabCryptedHoard;
    props.setCurrTab(TabCryptedHoard);
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
      { currTab===TabStories &&
        <Stories
          story={loc[1]}
        />
      }
      { currTab===TabWinners &&
        <Winners
          epoch={loc[1]}
        />
      }
    </header>
  )
}

export default Page;


