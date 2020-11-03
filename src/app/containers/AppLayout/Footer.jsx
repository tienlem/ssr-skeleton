import React, { memo } from 'react';
import { StyledFooter } from './styles';
export const Footer = () => (
  <StyledFooter>
    <span className="content">This is footer!</span>
  </StyledFooter>
);

export default memo(Footer);
