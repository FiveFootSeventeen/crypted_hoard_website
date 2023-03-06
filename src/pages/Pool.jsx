import React from "react";
import { useState, useEffect} from "react";

import Info from './Pool/Info';
import Delegates from "./Pool/Delegates";
import Delegate from "./Pool/Delegate";

import NavBar from "../components/NavBar";

export default function Pool(props) {
  const TabInfo = 0;
  const TabDelegates = 1;
  const TabDelegate = 2;

  const tabLst = [
    { "name": "Info", "route": "pool", "number": TabInfo },
    { "name": "Delegates", "number": TabDelegates },
    { "name": "Delegate", "number": TabDelegate, "hidden": true},
  ];

  const getDefault = (loc) => {
    for (const tabIdx in tabLst) {
      const tab = tabLst[tabIdx];
      let route = tab.route ? tab.route : tab.name;
      route = route.toLowerCase();

      if (loc[0] === route) {
        return tab.number;
      }
    }
    return TabInfo;
  };

  const [currTab, setCurrTab] = useState(getDefault(props.loc));

  useEffect(() => {
    console.log(props.loc);
  }, [props.loc]);

  return (
    <React.Fragment>
        <NavBar
            setCurrTab={setCurrTab}
            currTab={currTab}
            tabLst={tabLst}
        />
        { currTab===TabInfo &&
            <Info/>
        }
        { currTab===TabDelegates &&
            <Delegates/>
        }
        { currTab===TabDelegate &&
            <Delegate/>
        }
    </React.Fragment>
  );
}