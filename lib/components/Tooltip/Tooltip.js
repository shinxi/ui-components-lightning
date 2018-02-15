import React from 'react';
import Popover, { propTypes, defaultProps } from '../Popover';

const Tooltip = ({ children, ...props }) => (
  <Popover {...props} isTooltip>
    {children}
  </Popover>
);

Tooltip.propTypes = propTypes;
Tooltip.propTypes = defaultProps;

export default Tooltip;
