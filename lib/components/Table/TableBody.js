import React, { Component, Children, isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * ClassName for table body
   */
  className: PropTypes.string,
};

const defaultProps = {
  children: [],
  className: '',
};

class TableBody extends Component {
  renderRows() {
    return Children.map(this.props.children, child => {
      const children = [];

      Children.forEach(child.props.children, (innerChild, index) => {
        if (!isValidElement(innerChild)) return;
        const { shouldTruncate } = innerChild.props;
        const props = {
          key: index,
        };
        if (typeof shouldTruncate !== 'undefined') props.shouldTruncate = shouldTruncate;
        children.push(cloneElement(innerChild, props));
      });

      return cloneElement(child, { className: 'slds-hint-parent' }, children);
    });
  }

  render() {
    const { className } = this.props;
    const bodyClassnames = classnames('Table__body', className);
    return (
      <tbody className={bodyClassnames}>
        { this.renderRows() }
      </tbody>
    );
  }
}

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
