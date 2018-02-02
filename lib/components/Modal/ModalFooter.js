import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * pull the first element of footer to the left
   */
  directional: PropTypes.bool,
};

const defaultProps = {
  directional: false,
};

const ModalFooter = ({ className, directional, children, ...props }) => {
  const ftClassNames = classnames(className, 'slds-modal__footer', {
    'slds-modal__footer--directional': directional,
  });
  return (
    <div className={ftClassNames} {...props}>
      {children}
    </div>
  );
};

ModalFooter.propTypes = propTypes;
ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
