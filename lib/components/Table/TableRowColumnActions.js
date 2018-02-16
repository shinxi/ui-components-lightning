import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TableRowColumn from './TableRowColumn';

const propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const TableRowColumnActions = props => {
  const rowColumnClassnames = classnames(
    'Table__row-column-actions',
    'slds-cell-shrink',
  );
  return (
    <TableRowColumn
      className={rowColumnClassnames}
      data-label="Actions"
      shouldTruncate={false}
      width={50}
    >
      {props.children}
    </TableRowColumn>
  );
};

TableRowColumnActions.propTypes = propTypes;
TableRowColumnActions.defaultProps = defaultProps;

export default TableRowColumnActions;
