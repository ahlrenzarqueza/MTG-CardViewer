import React from 'react'
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 50px;
  height: 25px;

  div {
    position: absolute;
    top: 0;
    left: ${({ themeMode }) => themeMode === 'light' ? '0%' : '50%'};
    width: 50%;
    height: 100%;
    border-radius: 30px;
    background-color: white;
    transition: left 0.3s ease-out;
  }
`;

const Toggle = (props) => {
  return (
    <ToggleContainer onClick={props.toggleTheme} {...props}>
      <div></div>
    </ToggleContainer>
  );
};


export default Toggle;