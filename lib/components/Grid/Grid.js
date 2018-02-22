import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { validatePropComponent } from '../utils';

import GridRow from './GridRow';

const propTypes = {
  /**
   * Custom classname passed into the component
   */
  className: PropTypes.string,
  /**
   * Children of the Grid should only be GridRow
   */
  children: (props, name, cName) => validatePropComponent(props, name, cName, GridRow),
  /**
   * Does the grid have a frame
   */
  hasFrame: PropTypes.bool,
  /**
   * Should the Grid be rendered vertically
   */
  isVertical: PropTypes.bool,
  /**
   * Custom tag for the outside container
   */
  tag: PropTypes.string,
};

const defaultProps = {
  className: '',
  children: null,
  hasFrame: false,
  isVertical: false,
  tag: 'div',
};

const Grid = ({
  className,
  children,
  hasFrame,
  isVertical,
  tag,
  ...props
}) => {
  const gridClassNames = classnames('Grid',
    className,
    'slds-grid',
    {
      'slds-grid--frame': hasFrame,
      'slds-grid--vertical': isVertical,
    },
  );
  const Tag = tag;
  return (
    <Tag className={gridClassNames} {...props}>
      { children }
    </Tag>
  );
};


Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
