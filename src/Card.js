import React, { Component } from 'react';
import FlipCard from './FlipCard';
import styles from "./Card.module.css";
import styled from 'styled-components';

const Container = styled.div`{
  border: 1px solid ${({theme}) => theme.text};
  border-radius: 2px;
}`

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.splitRegEx = new RegExp(/\{(.*?)\}/g);
  }

  parseManaSymbols (text) {
    if(!text) return null;
    let matches = text.matchAll(this.splitRegEx);
    matches = Array.from(matches);
    const acc = {
      jsx: [],
      nextIndex: 0
    }
    const result = matches.reduce((ret, e, i) => {
      const el = <i key={i} className={`ms ms-${e[1].toLowerCase()}`}></i>;
      const len = e[0].length;
      ret.jsx.push(text.substring(ret.nextIndex, e.index));
      ret.nextIndex = e.index + len;
      ret.jsx.push(el);
      return ret;
    }, acc);

    result.jsx.push(text.substring(result.nextIndex));
    return result.jsx;
  }

  render() {
    const {name: cardName, imageUrl, power, 
      toughness, manaCost, text: cardTextRaw, artist} = this.props.card;

    return (
      <Container className={styles.card}>
        <div className={styles.cardimgcont}>
          <FlipCard cardImage={imageUrl} cardTitle={cardName}></FlipCard>
        </div>
        <div className={styles.carddetailcont}>
          <div className={styles.carddetailheader}>
            <h2>{cardName}</h2>
            <div className={styles.manacost}>
              {this.parseManaSymbols(manaCost)}
            </div>
          </div>
          <h4>{this.props.card.type}</h4>
          <div>
            <div className={styles.cardtext}>{this.parseManaSymbols(cardTextRaw)}</div>
            <p className={styles.cardsubtext}>
              Power/Toughness: {power ? power : "Not applicable"}/{toughness ? toughness : "Not applicable"}
            </p>
          </div>
          <span className={styles.cardartist}>
            Illustrated by: <span>{artist}</span>
          </span>
        </div>
      </Container>
    );
  }
}
 
export default Card;