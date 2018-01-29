import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validatePropComponent from '../utils';

import GridItem from './GridItem';

const VALID_ALIGNS = ['center', 'space', 'spread'];

const propTypes = {
  children: (props, name, cName) => validatePropComponent(props, name, cName, GridItem),
  className: PropTypes.string,
  align: PropTypes.oneOf(VALID_ALIGNS),
  nowrap: PropTypes.bool,
  nowrapSmall: PropTypes.bool,
  nowrapMedium: PropTypes.bool,
  nowrapLarge: PropTypes.bool,
  pullPadded: PropTypes.bool,
  cols: PropTypes.number,
};

const defaultProps = {};

const updateChildrenProps = (children, cols) => {
  return children.map(child => {
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
  nowrap,
  nowrapSmall,
  nowrapMedium,
  nowrapLarge,
  pullPadded,
  ...props
}) => {
  const rowClassNames = classnames(
    className,
    'slds-grid',
    align ? `slds-grid--align-${align}` : null,
    nowrap ? 'slds-nowrap' : 'slds-wrap',
    nowrapSmall ? 'slds-nowrap--small' : null,
    nowrapMedium ? 'slds-nowrap--medium' : null,
    nowrapLarge ? 'slds-nowrap--large' : null,
    pullPadded ? 'slds-grid--pull-padded' : null,
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
