import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * If row selected that highlights row item
   */
  isSelected: PropTypes.bool,
};

const defaultProps = {
  children: [],
  selected: false,
};

const TableRow = ({ isSelected, ...props }) => {
  const rowClassNames = classnames('Table__row', { 'Table__row--selected': isSelected });
  return (
    <tr {...props} className={rowClassNames}>
      {props.children}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
