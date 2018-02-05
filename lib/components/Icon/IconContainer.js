import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getIconColor from './getIconColor';

const propTypes = {
  /**
  * Children if any present
  */
  children: PropTypes.children,
  /**
  * ClassName to be added for container
  */
  containerclassName: PropTypes.string,
  /**
   * The color to fill the conatiner
   */
  fillColor: PropTypes.sting,
  /**
   * Type of the icon
   */
  icon: PropTypes.string,
  /**
  * Type of container
  */
  shape: PropTypes.oneOfType([
    PropTypes.oneOf(['default', 'circle']),
  ]),
};

const defaultProps = {
  children: [],
  icon: 'down',
  className: '',
  category: 'standard',
  shape: 'default',
};

const IconContainer = ({ ...props }) => {
  const { containerclassName, fillColor, shape, children } = props;
  let iconColor = null;
  React.Children.map(children, (child) => {
    iconColor = getIconColor(fillColor, child.category, child.icon);
  });
  const classes = classnames(
    containerclassName,
    'slds-icon__container',
    shape === 'circle' ? 'slds-icon__container--circle' : null,
    iconColor && `slds-icon-${iconColor}`,
  );
  return (
    <span className={classes} >
      { children }
    </span>
  );
};

IconContainer.propTypes = propTypes;
IconContainer.defaultProps = defaultProps;

export default IconContainer;
