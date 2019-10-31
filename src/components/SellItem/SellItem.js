import React from 'react';

import { Icon } from '../../components/Icon';
import { Wrapper } from './SellItem.styles';

const SellItem = ({ text, ...restProps }) => {
  return (
    <Wrapper>
      <Icon {...restProps} className="icon"/>
      <span>{text}</span>
    </Wrapper>
  );
};

export default SellItem;
export { SellItem };
