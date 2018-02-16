import React, {
  Component,
  Children,
  cloneElement,
  isValidElement,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './Table.scss';

const propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * ClassName for table component 
   */
  className: PropTypes.string,
  /**
   * Sets autoWidth for table
   */
  hasAutoWidth: PropTypes.bool,
  /**
   * Vertical border lines between columns
   */
  hasColumnBorder: PropTypes.bool,
  /**
   * Sets table layout property to fixed
   */
  hasFixedLayout: PropTypes.bool,
  /**
   * Sets bordered row items
   */
  hasRowBorder: PropTypes.bool,
  /**
   * Row hover highlight
   */
  hasRowHover: PropTypes.bool,
  /**
   * Column sortability
   */
  isSortable: PropTypes.bool,
  /**
   * Is alternate row items isStriped
   */
  isStriped: PropTypes.bool,
};

const defaultProps = {
  children: [],
  className: '',
  hasAutoWidth: false,
  hasColumnBorder: false,
  hasFixedLayout: false,
  hasRowBorder: true,
  hasRowHover: false,
  isSortable: false,
  isStriped: false,
};

class Table extends Component {
  onScroll() {
    const elements = document.getElementsByClassName(
      'react-slds-dropdown-opened',
    );
    if (elements.length) elements[0].childNodes[0].blur();
  }

  renderTableBody = base => base;

  renderTableHeader(base) {
    const { isSortable } = this.props;
    return cloneElement(base, { isSortable });
  }

  render() {
    const {
      className,
      hasRowBorder,
      hasColumnBorder,
      hasRowHover,
      isStriped,
      hasFixedLayout,
      children,
      hasAutoWidth,
      ...restProps
    } = this.props;
    delete restProps.sortable;

    const tableClassNames = classnames(
      'Table',
      { 'Table--auto-width': hasAutoWidth },
      className,
      'slds-table slds-table--cell-buffer',
      {
        'slds-no-row-hover': hasRowHover,
        'slds-table--bordered': hasRowBorder,
        'slds-table--col-bordered': hasColumnBorder,
        'slds-table--fixed-layout': hasFixedLayout,
        'slds-table--striped': isStriped,
      },
    );

    Children.forEach(children, child => {
      if (!isValidElement(child)) return;
      if (child.type === TableHeader) {
        this.tHead = this.renderTableHeader(child);
      } else if (child.type === TableBody) {
        this.tBody = this.renderTableBody(child);
      }
    });

    return (
      <div className="TableWrapper" onScroll={this.onScroll}>
        <table className={tableClassNames} {...restProps}>
          {this.tHead}
          {this.tBody}
        </table>
      </div>
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
