import React from 'react';

import { Wrapper } from './Header.styles';
import { Icon } from '../../Icon';
import { ICON_TYPES } from '../../../constants/iconTypes';

const Header = () => {
  return (
    <Wrapper>
      Accessibility Menu
      <Icon type={ICON_TYPES.close}/>
    </Wrapper>
  );
};

export default Header;
export { Header };
