import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const VALID_ALIGNS = ['top', 'middle', 'bottom'];

const propTypes = {
  /**
   * How the children are aligned
   */
  align: PropTypes.oneOf(VALID_ALIGNS),
  /**
   * Children of the GridItem can be anything
   */
  children: PropTypes.node,
  /**
   * Custom classname passed into the component
   */
  className: PropTypes.string,
  /**
   * Total number of columns this Item should use; 12 max
   */
  cols: PropTypes.number,
  /**
   * Total number of columns this Item should use on a small screen; 12 max
   */
  colsSmall: PropTypes.number,
  /**
   * Total number of columns this Item should use on a medium screen; 12 max
   */
  colsMedium: PropTypes.number,
  /**
   * Total number of columns this Item should use on a large screen; 12 max
   */
  colsLarge: PropTypes.number,
  /**
   * The default for grid components is to have flex, this turns it off
   */
  noFlex: PropTypes.bool,
  /**
   * The order of the fields, defaulting to the natural order
   */
  order: PropTypes.number,
  /**
   * The order of the fields when rendered on a small screen
   */
  orderSmall: PropTypes.number,
  /**
   * The order of the fields when rendered on a medium screen
   */
  orderMedium: PropTypes.number,
  /**
   * The order of the fields when rendered on a large screen
   */
  orderLarge: PropTypes.number,
  /**
   * Does this item have padding? Acceptable values of true, false, 'medium', 'large'
   */
  padded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * Total number of columns to use
   */
  totalCols: PropTypes.number,
  /**
   * Total number of columns to use on a small screen
   */
  totalColsSmall: PropTypes.number,
  /**
   * Total number of columns to use on a medium screen
   */
  totalColsMedium: PropTypes.number,
  /**
   * Total number of columns to use on a large screen
   */
  totalColsLarge: PropTypes.number,
};

const defaultProps = {
  align: null,
  children: null,
  className: '',
  cols: null,
  colsSmall: null,
  colsMedium: null,
  colsLarge: null,
  noFlex: false,
  order: null,
  orderSmall: null,
  orderMedium: null,
  orderLarge: null,
  padded: false,
  totalCols: null,
  totalColsSmall: null,
  totalColsMedium: null,
  totalColsLarge: null,
};

function adjustCols(colNum, isLarge) {
  if (colNum > 6) {
    return isLarge ? 12 : 6;
  }
  return colNum;
}

const GridItem = ({
  align,
  children,
  className,
  cols,
  colsSmall,
  colsMedium,
  colsLarge,
  noFlex,
  order,
  orderSmall,
  orderMedium,
  orderLarge,
  padded,
  totalCols,
  totalColsSmall,
  totalColsMedium,
  totalColsLarge,
  ...props
}) => {
  const itemClassNames = classnames('Grid__item',
    className,
    padded ? `slds-col--padded${/^(medium|large)$/.test(padded) ? `-${padded}` : ''}` : 'slds-col',
    align && `slds-align-${align}`,
    noFlex && 'slds-no-flex',
    order && `slds-order--${order}`,
    orderSmall && `slds-small-order--${orderSmall}`,
    orderMedium && `slds-medium-order--${orderMedium}`,
    orderLarge && `slds-large-order--${orderLarge}`,
    cols && totalCols ? `slds-size--${cols}-of-${adjustCols(totalCols, true)}` : null,
    colsSmall && totalColsSmall
      ? `slds-small-size--${colsSmall}-of-${adjustCols(totalColsSmall, false)}`
      : null,
    colsMedium && totalColsMedium
      ? `slds-medium-size--${colsMedium}-of-${adjustCols(totalColsMedium, false)}`
      : null,
    colsLarge && totalColsMedium
      ? `slds-large-size--${colsLarge}-of-${adjustCols(totalColsLarge, true)}`
      : null,
  );
  return (
    <div className={itemClassNames} {...props}>
      {children}
    </div>
  );
};

GridItem.propTypes = propTypes;
GridItem.defaultProps = defaultProps;

GridItem.validAligns = VALID_ALIGNS;

export default GridItem;
