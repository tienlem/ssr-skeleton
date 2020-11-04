import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledLayout, StyledContent } from './styles';

export const BlankLayout = props => {
  return (
    <StyledLayout>
      <StyledContent>Blank Content</StyledContent>
    </StyledLayout>
  );
};

BlankLayout.propTypes = {
  component: PropTypes.any,
};

export default memo(BlankLayout);
