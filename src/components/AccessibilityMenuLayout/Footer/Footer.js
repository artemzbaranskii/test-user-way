import React from 'react';

import { Wrapper } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <a className="logo-label" href="#">Accessibility by UserWay.org</a>
      <a className="donate" href="#">Donate</a>
    </Wrapper>
  );
};

export default Footer;
export { Footer };
