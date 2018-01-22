import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from './../Icon';

const ICON_SIZES = ['x-small', 'small', 'medium', 'large'];

const ICON_ALIGNS = ['left', 'right'];

const propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  icon: PropTypes.string,
  iconAlign: PropTypes.oneOf(ICON_ALIGNS),
  iconMore: PropTypes.string,
  iconMoreSize: PropTypes.oneOf(ICON_SIZES),
  iconSize: PropTypes.oneOf(ICON_SIZES),
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};


const ButtonIcon = ({ icon, align, size, inverse, className, style, ...props }) => {
  const alignClassName = ICON_ALIGNS.indexOf(align) >= 0 ? `slds-button__icon--${align}` : null;
  const sizeClassName = ICON_SIZES.indexOf(size) >= 0 ? `slds-button__icon--${size}` : null;
  const inverseClassName = inverse ? 'slds-button__icon--inverse' : null;
  const iconClassNames = classnames('slds-button__icon', alignClassName, sizeClassName,
        inverseClassName, className);
  const iconStyle = { ...style, pointerEvents: 'none' };
  return (
    <Icon
      className={iconClassNames}
      icon={icon}
      textColor={null}
      style={iconStyle}
      { ...props }
    />
    );
};

ButtonIcon.propTypes = propTypes;
ButtonIcon.iconSizes = ICON_SIZES;
ButtonIcon.iconAlighs = ICON_ALIGNS;

export default ButtonIcon;
