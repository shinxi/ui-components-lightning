import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const PopoverHeader = props => (
  <div className="PopoverHeader slds-popover__header">{props.children}</div>
);

PopoverHeader.propTypes = propTypes;
PopoverHeader.defaultProps = defaultProps;

export default PopoverHeader;
