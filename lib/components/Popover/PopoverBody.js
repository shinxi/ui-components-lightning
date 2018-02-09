import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const PopoverBody = props => (
  <div className="PopoverBody slds-popover__body" {...props}>
    {props.children}
  </div>
);

PopoverBody.propTypes = propTypes;
PopoverBody.defaultProps = defaultProps;

export default PopoverBody;
