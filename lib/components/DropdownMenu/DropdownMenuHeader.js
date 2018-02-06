
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  divider: PropTypes.oneOf(['top', 'bottom']),
  children: PropTypes.node,
};

const DropdownMenuHeader = ({ divider, className, children }) => {
  const menuHeaderClass = classnames(
    'slds-dropdown__header',
    { [`slds-has-divider--${divider}-space`]: divider },
    className,
  );
  return (
    <div className={menuHeaderClass}>
      <span className="slds-text-heading--label">{children}</span>
    </div>
  );
};

DropdownMenuHeader.propTypes = propTypes;

export default DropdownMenuHeader;
