import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * If row slected that highlights row item
   */
  selected: PropTypes.bool,
};

const defaultProps = {
  children: [],
  selected: false,
};

const TableRow = ({ selected, ...props }) => {
  const rowClassNames = classnames('Table__row', { 'Table__row--selected': selected });
  return (
    <tr {...props} className={rowClassNames}>
      {props.children}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
