import React, {useState, useEffect} from 'react';
import styled, {keyframes, css} from 'styled-components';
import backImage from './assets/Magic-Card-Back.jpg';

const flipAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(180deg);
  }
`;

const Container = styled.div`{
    position: relative;
    height: 398px;
    width: 285px;
}
    > div {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);      
        animation: ${props => props.animate ? css`${flipAnimation} 2s ease-out` : 'unset'};
        animation-fill-mode: forwards; 
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    .flip-card-back img,
    .flip-card-front img {
        width: 100%;
        object-fit: contain;
    }

    .flip-card-front {
        transform: rotateY(180deg);
    }
`

const FlipCard = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const playFlipAnimation = () => {
        setImageLoaded(true);
    }    

    useEffect(() => {
        setImageLoaded(false);
    }, [props.cardImage]);

    return (
      <Container {...props} animate={imageLoaded}>
        <div>
            <div className="flip-card-back">
                <img alt="Magic Trading Card Game - Back Side" src={backImage}></img>
            </div>
            <div className="flip-card-front">
                <img alt={props.cardTitle} onLoad={playFlipAnimation} src={props.cardImage}></img>
            </div>
        </div>
    </Container>
    )
  };
  
  export default FlipCard;
  