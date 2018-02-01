import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validatePropComponent from '../utils';

import GridItem from './GridItem';

const VALID_ALIGNS = ['center', 'space', 'spread'];

const propTypes = {
  /**
   * How the children are aligned
   */
  align: PropTypes.oneOf(VALID_ALIGNS),
  /**
   * Children of the GridRow should only be GridItem
   */
  children: (props, name, cName) => validatePropComponent(props, name, cName, GridItem),
  /**
   * Custom classname passed into the component
   */
  className: PropTypes.string,
  /**
   * Total number of columns in the row; 12 max
   */
  cols: PropTypes.number,
  /**
   * Are we wrapping at the end of the row?
   */
  hasWrap: PropTypes.bool,
  /**
   * Are we wrapping at the end of the row for Small screens?
   */
  hasWrapSmall: PropTypes.bool,
  /**
   * Are we wrapping at the end of the row for Medium screens?
   */
  hasWrapMedium: PropTypes.bool,
  /**
   * Are we wrapping at the end of the row for Large screens?
   */
  hasWrapLarge: PropTypes.bool,
  /**
   * Do we have padding inside of GridRow
   */
  isPadded: PropTypes.bool,
};

const defaultProps = {
  align: '',
  children: null,
  className: '',
  cols: null,
  hasWrap: false,
  hasWrapSmall: false,
  hasWrapMedium: false,
  hasWrapLarge: false,
  isPadded: false,
};

const updateChildrenProps = (children, cols) => {
  return React.Children.map(children, child => {
    const newProps = {};
    if (!child.totalCols) {
      newProps.totalCols = cols;
    }

    if (newProps !== {}) {
      return React.cloneElement(child, newProps);
    }
    return child;
  });
};

const GridRow = ({
  align,
  children,
  className,
  cols,
  hasWrap,
  hasWrapSmall,
  hasWrapMedium,
  hasWrapLarge,
  isPadded,
  ...props
}) => {
  const rowClassNames = classnames('Grid__row',
    className,
    'slds-grid',
    align && `slds-grid--align-${align}`,
    !hasWrap ? 'slds-nowrap' : 'slds-wrap',
    !hasWrapSmall && 'slds-nowrap--small',
    !hasWrapMedium && 'slds-nowrap--medium',
    !hasWrapLarge && 'slds-nowrap--large',
    isPadded && 'slds-grid--pull-padded',
  );
  return (
    <div className={rowClassNames} {...props}>
      {updateChildrenProps(children, cols)}
    </div>
  );
};

GridRow.propTypes = propTypes;
GridRow.defaultProps = defaultProps;

GridRow.validTypes = VALID_ALIGNS;

export default GridRow;
