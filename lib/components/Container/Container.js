import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CONTAINER_SIZES = ['small', 'medium', 'large'];

const CONTAINER_ALIGNS = ['left', 'center', 'right'];

const propTypes = {
  className: PropTypes.string,
  /**
   * Size of the Container
   */
  size: PropTypes.oneOf(CONTAINER_SIZES),
  /**
   * Alignment of the Container
   */
  align: PropTypes.oneOf(CONTAINER_ALIGNS),
  children: PropTypes.element,
};

const defaultProps = {
  /**
   * Defaults fluid width
   */
  size: 'fluid',
};

const Container = ({ className, size, align, children, ...props }) => {
  const ctClassNames = classnames(
    className,
    `slds-container--${size}`,
    align ? `slds-container--${align}` : null,
  );
  return (
    <div className={ctClassNames} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
