import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledLayout, StyledContent } from './styles';
import Header from './Header';
import Footer from './Footer';

export const CommonLayout = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledContent>{children}</StyledContent>
    <Footer />
  </StyledLayout>
);

CommonLayout.propTypes = {
  component: PropTypes.any,
};

export default memo(CommonLayout);
