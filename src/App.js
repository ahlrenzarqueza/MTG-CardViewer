import React, { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import { GlobalStyles } from './styles/GlobalStyles';

import MtgApi from "./MtgApi";
import Button from "./Button";
import Card from "./Card";
import Loader from "./Loader";
import Toggle from "./Toggle";

import styles from "./App.module.css";
import "./thirdparty-src/css/mana.min.css";

const LoaderContainer = styled.div`{
  position: relative;
  width: 100%;
  height: 100%;
  filter: ${({loading}) => loading ? 'blur(5px)' : 'blur(0)'};
  transition: filter 1s ease-out; 
 }
 `

const App = () => {
  const [loadState, setLoadState] = useState(false);
  const [cardState, setCardState] = useState({
    "name": "Cloudthresher",
    "manaCost": "{2}{G}{G}{G}{G}",
    "cmc": 6,
    "colors": [
      "Green"
    ],
    "colorIdentity": [
      "G"
    ],
    "type": "Creature — Elemental",
    "supertypes": [],
    "types": [
      "Creature"
    ],
    "subtypes": [
      "Elemental"
    ],
    "rarity": "Rare",
    "set": "CMA",
    "setName": "Commander Anthology",
    "text": "Flash\nReach\nWhen Cloudthresher enters the battlefield, it deals 2 damage to each creature with flying and each player.\nEvoke {2}{G}{G} (You may cast this spell for its evoke cost. If you do, it's sacrificed when it enters the battlefield.)",
    "artist": "Christopher Moeller",
    "number": "96",
    "power": "7",
    "toughness": "7",
    "layout": "normal",
    "multiverseid": 430315,
    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=430315&type=card",
    "rulings": [
      {
        "date": "2013-04-15",
        "text": "If you cast this card for its evoke cost, you may put the sacrifice trigger and the regular enters-the-battlefield trigger on the stack in either order. The one put on the stack last will resolve first."
      }
    ],
    "foreignNames": [],
    "printings": [
      "C15",
      "CMA",
      "DDR",
      "LRW"
    ],
    "originalText": "Flash\nReach\nWhen Cloudthresher enters the battlefield, it deals 2 damage to each creature with flying and each player.\nEvoke {2}{G}{G} (You may cast this spell for its evoke cost. If you do, it's sacrificed when it enters the battlefield.)",
    "originalType": "Creature — Elemental",
    "legalities": [
      {
        "format": "Commander",
        "legality": "Legal"
      },
      {
        "format": "Duel",
        "legality": "Legal"
      },
      {
        "format": "Legacy",
        "legality": "Legal"
      },
      {
        "format": "Modern",
        "legality": "Legal"
      },
      {
        "format": "Penny",
        "legality": "Legal"
      },
      {
        "format": "Vintage",
        "legality": "Legal"
      }
    ],
    "id": "96f3e298-194d-51d2-9596-20fa27b78a49"
  });
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const showRandomCard = async () => {
    setLoadState(true);
    const cardResult = await MtgApi.getSingleRandomCard();
    setLoadState(false);
    setCardState(cardResult);
  }

  const themeStyle = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeStyle}>
      <GlobalStyles/>
      <div className={styles.app}>
        <div className={styles.appheader}>
          <span>Theme Toggle: </span>
          <Toggle toggleTheme={toggleTheme} themeMode={theme}></Toggle>
        </div>
        <div className={styles.cardviewcont}>
          {loadState && 
          <Loader className={styles.loader} width="50px" height="50px" fill={themeStyle.text}/>}
          <LoaderContainer loading={loadState ? 'true' : undefined}>
            <Card className={styles.cardloading} card={cardState} />
          </LoaderContainer>
        </div>
        <br />
        <br />
        <Button disabled={loadState} onClick={() => showRandomCard()}>Show Random Card</Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
