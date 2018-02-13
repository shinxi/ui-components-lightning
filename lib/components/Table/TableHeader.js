import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TableHeaderColumn from './TableHeaderColumn';

const propTypes = {
  /**
   * Actions position
   */
  actionsPosition: PropTypes.number,
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * className for table header component
   */
  className: PropTypes.string,
  /**
   * If TableHeaderColumn includes action
   */
  hasActions: PropTypes.bool,
  /**
   * Is sortable
   */
  sortable: PropTypes.bool,
};
const defaultProps = {
  actionsPosition: 0,
  children: [],
  className: '',
  hasActions: false,
  sortable: false,
};

class TableHeader extends Component {
  renderBaseHeaderRow() {
    const { children, sortable, hasActions, actionsPosition } = this.props;
    let nextChildren = [];

    const props = {
      className: 'slds-text-title--caps',
    };

    Children.forEach(children.props.children, (child, index) => {
      const childSortable = child.props.sortable;
      nextChildren.push(cloneElement(child, {
        key: index,
        sortable: typeof childSortable === 'undefined' ? sortable : childSortable,
      }));
    });

    if (hasActions) {
      nextChildren = [
        ...nextChildren.slice(0, actionsPosition),
        <TableHeaderColumn
          sortable={false}
          width={50}
          key={-1}
          className="slds-cell-shrink"
        />,
        ...nextChildren.slice(actionsPosition),
      ];
    }

    return cloneElement(children, props, nextChildren);
  }

  render() {
    const { className } = this.props;
    const headerClassnames = classnames('Table__header', className);
    return (
      <thead className={headerClassnames}>
        { this.renderBaseHeaderRow() }
      </thead>
    );
  }
}

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
