import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const defaultProps = {};

const ModalContent = ({ className, children, ...props }) => {
  const ctClassNames = classnames('ModalContent', className, 'slds-modal__content');
  return (
    <div className={ctClassNames} {...props}>
      {children}
    </div>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
