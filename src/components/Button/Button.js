import React from 'react';

import { Wrapper } from './Button.styles';


const Button = ({ btnText, width, marginLeft, ...restProps }) => {
  return (
    <Wrapper width={width} marginLeft={marginLeft}>
      <button {...restProps}>{btnText}</button>
    </Wrapper>
  );
};

export default Button;
export { Button };
