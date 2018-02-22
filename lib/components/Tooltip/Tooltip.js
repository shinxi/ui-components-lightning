import React from 'react';
import Popover, { propTypes, defaultProps } from '../Popover/Popover';

const Tooltip = ({ children, ...props }) => (
  <Popover {...props} isTooltip>
    {children}
  </Popover>
);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
