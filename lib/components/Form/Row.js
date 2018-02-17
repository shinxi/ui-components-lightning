import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children of Row
   */
  children: PropTypes.node,
  /**
   * Additional classNames besides default ones
   */
  className: PropTypes.string,
  /**
   * Number of columns
   */
  cols: PropTypes.number,
};

const defaultProps = {
  children: null,
  className: '',
  cols: null,
};

class Row extends Component {
  totalCols = this.props.cols || React.Children.count(this.props.children);

  render() {
    const { className, children } = this.props;
    const rowClassNames = classnames('FormElement__row', className, 'slds-form-element__row');
    return (
      <div className={rowClassNames}>
        {React.Children.map(children, child =>
          React.cloneElement(child, { totalCols: this.totalCols }),
        )}
      </div>
    );
  }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;
Row.isFormElement = true;

export default Row;
