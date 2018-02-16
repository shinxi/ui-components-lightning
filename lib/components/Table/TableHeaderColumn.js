import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from './../Icon';

const HEADER_ALIGNS = ['left', 'center', 'right'];

const propTypes = {
  /**
   * Table header alignments, left center or right
   */
  align: PropTypes.oneOf(HEADER_ALIGNS),
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * ClassName for Table header column
   */
  className: PropTypes.string,
  /**
   * Is resizable
   */
  isResizable: PropTypes.bool,
  /**
   * If column needs sortability
   */
  isSortable: PropTypes.bool,
  /**
   * If column sorted apply slds-is-sorted class
   */
  isSorted: PropTypes.bool,
  /**
   * Function callback onSort
   */
  onSort: PropTypes.func,
  /**
   * Sort direction
   */
  sortDir: PropTypes.string,
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
  isResizable: false,
  isSortable: false,
  isSorted: false,
  onSort: null,
  sortDir: 'ASC',
  width: 'auto',
};

const TableHeaderColumn = (props) => {
  const {
    isSortable, isResizable, children, className, width, sortDir, onSort, isSorted, align, ...pprops
  } = props;
  const columnClassNames = classnames(className,
    'TableHeader__column',
    'slds-text-title--caps slds-truncate', {
      'slds-is-resizable': isResizable,
      'slds-is-sortable': isSortable,
      'slds-is-sorted': isSorted,
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
      {isSortable ?
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
