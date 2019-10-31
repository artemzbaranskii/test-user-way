import React from 'react';

import { iconsData } from './assets';
import { Wrapper } from './AccessibilityMenu.styles'
import { MainContainer, Footer, Header } from '../../components/AccessibilityMenuLayout';
import { SellItem } from '../../components/SellItem';
import { Button } from '../../components/Button';


const AccessibilityMenu = () => {
  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <div className="userway-menu-app">
          {iconsData.map(item => <SellItem key={item.type} {...item} />)}
        </div>
        <div className="btn-holder">
          <Button width="50%" btnText="Reset all"/>
          <Button width="50%" marginLeft btnText="Move/Hide panel"/>
        </div>
        <div className="btn-holder">
          <Button btnText="White label this widget"/>
        </div>
      </MainContainer>
      <Footer />
    </Wrapper>
  );
};

export default AccessibilityMenu;
export { AccessibilityMenu };
