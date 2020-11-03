import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Icon({ type, className, ...rest }) {
  return (
    <span
      className={classNames(`custom-icon custom-icon-${type}`, className)}
      {...rest}
    />
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};
