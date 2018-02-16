import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children for the MenuHeader. 
   */
  children: PropTypes.node,
  /**
   * ClassName for the MenuHeader. 
   */
  className: PropTypes.string,
  /**
   * Divider for the MenuHeader. 
   */
  divider: PropTypes.oneOf(['top', 'bottom']),
};

const defaultProps = {
  children: [],
  className: '',
  divider: null,
};

const MenuHeader = ({ divider, className, children }) => {
  const MenuHeaderClass = classnames(
    'Menu__header',
    'slds-dropdown__header',
    { [`slds-has-divider--${divider}-space`]: divider },
    className,
  );
  return (
    <div className={MenuHeaderClass}>
      <span className="slds-text-heading--label">{children}</span>
    </div>
  );
};

MenuHeader.propTypes = propTypes;
MenuHeader.defaultProps = defaultProps;

export default MenuHeader;
