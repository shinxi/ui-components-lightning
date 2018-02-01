import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultTypes = {};

const ModalContent = ({ className, children, ...props }) => {
  const ctClassNames = classnames(className, 'slds-modal__content');
  return (
    <div className={ctClassNames} {...props}>
      {children}
    </div>
  );
};

ModalContent.propTypes = propTypes;
ModalContent.defaultTypes = defaultTypes;

export default ModalContent;
