import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const VALID_ALIGNS = ['top', 'medium', 'bottom'];

const propTypes = {
  align: PropTypes.oneOf(VALID_ALIGNS),
  children: PropTypes.node,
  className: PropTypes.string,
  cols: PropTypes.number,
  colsSmall: PropTypes.number,
  colsMedium: PropTypes.number,
  colsLarge: PropTypes.number,
  noFlex: PropTypes.bool,
  order: PropTypes.number,
  orderSmall: PropTypes.number,
  orderMedium: PropTypes.number,
  orderLarge: PropTypes.number,
  padded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  totalCols: PropTypes.number,
  totalColsSmall: PropTypes.number,
  totalColsMedium: PropTypes.number,
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

const Col = ({
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
  const rowClassNames = classnames(
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
    <div className={rowClassNames} {...props}>
      {children}
    </div>
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

Col.validAligns = VALID_ALIGNS;

export default Col;
