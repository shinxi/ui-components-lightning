import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from './../Icon';

const HEADER_ALIGNS = ['left', 'center', 'right'];

const propTypes = {
  /**
   * Defaults center aligned
   */
  align: PropTypes.oneOf(HEADER_ALIGNS),
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * className for table component 
   */
  className: PropTypes.string,
  /**
   * Function callback onSort
   */
  onSort: PropTypes.func,
  /**
   * Is resizable
   */
  resizable: PropTypes.bool,
  /**
   * If column needs sortability
   */
  sortable: PropTypes.bool,
  /**
   * Sort direction
   */
  sortDir: PropTypes.string,
  /**
   * If column sorted apply slds slds-is-sorted class
   */
  sorted: PropTypes.bool,
  /**
   * Width of the column
   */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
const defaultProps = {
  align: 'left',
  children: [],
  className: '',
  onSort: null,
  resizable: false,
  sortable: false,
  sortDir: 'ASC',
  sorted: false,
  width: 'auto',
};

const TableHeaderColumn = (props) => {
  const {
    sortable, resizable, children, className, width, sortDir, onSort, sorted, align, ...pprops
  } = props;
  const columnClassNames = classnames(className,
    'TableHeader__column',
    'slds-text-title--caps slds-truncate', {
      'slds-is-resizable': resizable,
      'slds-is-sortable': sortable,
      'slds-is-sorted': sorted,
      [`slds-text-align--${align}`]: align,
    });

  const style = { minWidth: width || 'auto' };

  const icon = sortDir === 'DESC' ? 'arrowdown' : 'arrowup';

  return (
    <th
      {...pprops}
      className={columnClassNames}
      scope="col"
      style={style}
    >
      {sortable ?
        <a
          onClick={(e) => { e.preventDefault(); onSort(); }}
          role="button"
          tabIndex="0"
          className="slds-th__action slds-text-link--reset"
        >
          <span className="slds-assistive-text">Sort </span>
          <span className="slds-truncate">{children}</span>
          <Icon
            className="slds-is-sortable__icon"
            textColor="default"
            size="x-small"
            category="utility"
            icon={icon}
            style={{ position: 'absolute', right: 20 }}
          />
          <span className="slds-assistive-text" aria-live="assertive" aria-atomic="true" />
        </a>
        : children
      }
    </th>
  );
};

TableHeaderColumn.propTypes = propTypes;
TableHeaderColumn.defaultProps = defaultProps;
TableHeaderColumn.validAligns = HEADER_ALIGNS;

export default TableHeaderColumn;
