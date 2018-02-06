import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const PopoverHeader = props => <div className="slds-popover__header">{props.children}</div>;

PopoverHeader.propTypes = propTypes;
PopoverHeader.defaultProps = defaultProps;

export default PopoverHeader;
