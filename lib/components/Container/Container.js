import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CONTAINER_SIZES = ['fluid', 'small', 'medium', 'large'];

const CONTAINER_ALIGNS = ['left', 'center', 'right'];

const propTypes = {
  className: PropTypes.string,
  /**
   * Size of the Container
   * 
   * fluid - width: 100%;
   * small - max-width: 30rem;
   * medium - max-width: 48rem;
   * large - max-width: 64rem;
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
  /**
   * Defaults left aligned
   */
  align: 'left',
};

const Container = ({ className, size, align, children, ...props }) => {
  const ctClassNames = classnames(className, `slds-container--${size}`, `slds-container--${align}`);
  return (
    <div className={ctClassNames} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
Container.validSizes = CONTAINER_SIZES;
Container.validAligns = CONTAINER_ALIGNS;

export default Container;
