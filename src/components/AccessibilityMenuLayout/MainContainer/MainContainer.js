import React from 'react';

import { Wrapper } from './MainContainer.styles';
import { Icon } from "../../Icon";
import { ICON_TYPES } from "../../../constants/iconTypes";


const MainContainer = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <div className="logo">
         <Icon type={ICON_TYPES.logo}/>
         <span>
           <Icon type={ICON_TYPES.socialChat}/>
           <Icon type={ICON_TYPES.settings}/>
         </span>
      </div>
    </Wrapper>
  );
};

export default MainContainer;
export { MainContainer };
