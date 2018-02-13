import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * className for table component 
   */
  className: PropTypes.string,
  /**
   * If truncate that applies slds-truncate class
   */
  truncate: PropTypes.bool,
};

const defaultProps = {
  children: [],
  className: '',
  truncate: true,
};

export const TableRowColumn = (props) => {
  const { truncate, className, children, ...pprops } = props;
  const columnClassNames = classnames('Table__row-column', className, {
    'slds-truncate': truncate,
  });
  const style = {};
  if (!truncate) style.position = 'static';

  return (
    <td
      role="gridcell"
      style={style}
      className={columnClassNames}
      {...pprops}
    >{children}</td>
  );
};

TableRowColumn.propTypes = propTypes;
TableRowColumn.defaultProps = defaultProps;

export default TableRowColumn;
