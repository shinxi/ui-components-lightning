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
   * ClassName for table header
   */
  className: PropTypes.string,
  /**
   * If TableHeader has action
   */
  hasActions: PropTypes.bool,
  /**
   * Is sortable
   */
  isSortable: PropTypes.bool,
};
const defaultProps = {
  actionsPosition: 0,
  children: [],
  className: '',
  hasActions: false,
  isSortable: false,
};

class TableHeader extends Component {
  renderBaseHeaderRow() {
    const { children, isSortable, hasActions, actionsPosition } = this.props;
    let nextChildren = [];

    const props = {
      className: 'slds-text-title--caps',
    };

    Children.forEach(children.props.children, (child, index) => {
      const childSortable = child.props.isSortable;
      nextChildren.push(cloneElement(child, {
        isSortable: typeof childSortable === 'undefined' ? isSortable : childSortable,
        key: index,
      }));
    });

    if (hasActions) {
      nextChildren = [
        ...nextChildren.slice(0, actionsPosition),
        <TableHeaderColumn
          isSortable={false}
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
