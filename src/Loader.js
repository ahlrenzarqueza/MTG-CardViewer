import React from "react";
import styled, {keyframes} from 'styled-components';

const rotateKeyFrame = keyframes`
  {
    0% { transform: translate(-50%,-50%) rotate(0deg); }
    100% { transform: translate(-50%,-50%) rotate(360deg); }
  }
`;

const InnerDiv = styled.div`
{
  position: relative;
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
`

const InnerDiv2 = styled.div`
{
  position: absolute;
  width: 60%;
  height: 60%;
  border: ${props => {
    let {fill = 'black', thickness = 7} = props;
    return `${parseInt(thickness)}px solid ${fill}`
  }};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${rotateKeyFrame} 1.8s linear infinite;
  top: 50%;
  left: 50%;
  box-sizing: content-box;
}
`

const MainDiv = styled.div`
{
  width: 50%;
  height: 50%;
  width: ${props => props.width ? props.width : "100px"};
  height:${props => props.height ? props.height : "100px"};
  display: inline-block;
  overflow: hidden;
  background: none;
}
`

const Loader = (props) => {
  return (
    <MainDiv {...props}>
      <InnerDiv>
        <InnerDiv2 {...props}/>
      </InnerDiv>
    </MainDiv>
  )
}

export default Loader;
