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
   * Sets autoWidth for table
   */
  autoWidth: PropTypes.bool,
  /**
   * Sets bordered row items
   */
  bordered: PropTypes.bool,
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * className for table component 
   */
  className: PropTypes.string,
  /**
   * Sets table layout property to fixed
   */
  fixedLayout: PropTypes.bool,
  /**
   * Whether row holver highlight needed
   */
  noRowHover: PropTypes.bool,
  /**
   * If column needs sortability
   */
  sortable: PropTypes.bool,
  /**
   * alternate row items striped
   */
  striped: PropTypes.bool,
  /**
   * Whether need vertical border lines between columns
   */
  verticalBorders: PropTypes.bool,
};

const defaultProps = {
  autoWidth: false,
  bordered: true,
  children: [],
  className: '',
  fixedLayout: false,
  noRowHover: false,
  sortable: false,
  striped: false,
  verticalBorders: false,
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
    const { sortable } = this.props;
    return cloneElement(base, { sortable });
  }

  render() {
    const {
      className,
      bordered,
      verticalBorders,
      noRowHover,
      striped,
      fixedLayout,
      children,
      autoWidth,
      ...pprops
    } = this.props;
    delete pprops.sortable;

    const tableClassNames = classnames(
      'Table',
      { 'Table--auto-width': autoWidth },
      className,
      'slds-table slds-table--cell-buffer',
      {
        'slds-no-row-hover': noRowHover,
        'slds-table--bordered': bordered,
        'slds-table--col-bordered': verticalBorders,
        'slds-table--fixed-layout': fixedLayout,
        'slds-table--striped': striped,
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
        <table className={tableClassNames} {...pprops}>
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
