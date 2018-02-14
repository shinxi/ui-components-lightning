import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children for the Menuheader. 
   */
  children: PropTypes.node,
  /**
   * ClassName for the Menuheader. 
   */
  className: PropTypes.string,
  /**
   * Divider for the Menuheader. 
   */
  divider: PropTypes.oneOf(['top', 'bottom'])
};

const defaultProps = {
  children: [],
  className: '',
  divider: null
};

const Menuheader = ({ divider, className, children }) => {
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

Menuheader.propTypes = propTypes;
Menuheader.defaultProps = defaultProps;

export default Menuheader;
