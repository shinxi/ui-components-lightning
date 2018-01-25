import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const VALID_TYPES = ['default', 'shade', 'inverse'];

const propTypes = {
  /**
   * The contents of the Badge, defined by either children or a label.
   */
  children: PropTypes.node,
  /**
   * The contents of the Badge, defined by either a label or children.
   */
  label: PropTypes.string,
  /**
   * Defines the style of the badge
   */
  type: PropTypes.oneOf(VALID_TYPES),
};

const defaultProps = {
  children: null,
  label: '',
  type: 'default',
}

const determineTypeClassName = function (type) {
  return type ? `slds-theme--${type}` : null;
};

const Badge = ({ children, type, label, ...props }) => {
  const badgeClassNames = classnames(
    'Badge',
    'slds-badge',
    determineTypeClassName(type),
  );
  return (
    <span className={badgeClassNames} {...props}>
      { label || children }
    </span>
  );
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

Badge.validTypes = VALID_TYPES;

export default Badge;
