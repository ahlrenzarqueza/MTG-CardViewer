import React from "react";
import styled from 'styled-components';

const BtnSyled = styled.button`{
  appearance: none;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  background: #39b0a4;
  font-size: 16px;
  line-height: 1;
  font-weight: bold;
  color: white;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease-out;
}
  :disabled {
    opacity: 0.5;
  }
`

export default React.forwardRef(function Button(props, ref) {
  return (
    <BtnSyled ref={ref}
      {...props}
    />
  );
});
