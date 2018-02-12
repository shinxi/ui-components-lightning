
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children for the Dropdownheader. 
   */
  children: PropTypes.node,
  /**
   * ClassName for the Dropdownheader. 
   */
  className: PropTypes.string,
  /**
   * Divider for the Dropdownheader. 
   */
  divider: PropTypes.oneOf(['top', 'bottom']),
};

const DropdownHeader = ({ divider, className, children }) => {
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

DropdownHeader.propTypes = propTypes;

export default DropdownHeader;
