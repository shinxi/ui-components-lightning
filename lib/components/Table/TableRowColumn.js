import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * className for table row component 
   */
  className: PropTypes.string,
  /**
   * Truncate that applies slds-truncate class
   */
  shouldTruncate: PropTypes.bool,
};

const defaultProps = {
  children: [],
  className: '',
  shouldTruncate: true,
};

const TableRowColumn = props => {
  const { shouldTruncate, className, children, ...restProps } = props;
  const columnClassNames = classnames('Table__row-column', className, {
    'slds-truncate': shouldTruncate,
  });
  const style = {};
  if (!shouldTruncate) style.position = 'static';

  return (
    <td
      role="gridcell"
      style={style}
      className={columnClassNames}
      {...restProps}
    >
      {children}
    </td>
  );
};

TableRowColumn.propTypes = propTypes;
TableRowColumn.defaultProps = defaultProps;

export default TableRowColumn;
