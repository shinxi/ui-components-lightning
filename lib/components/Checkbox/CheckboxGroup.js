import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * className that will be used for styling the wrapper div and its children /checkbox element
   */
  className: PropTypes.string,
  /**
   * cols size in number
  */
  cols: PropTypes.number,
  /**
   * Label to display just next to checkbox. If no label is provided, empty string will be returned
   * as defaultProp.
   */
  label: PropTypes.string,
  /**
   * Name string property for the component
   */
  name: PropTypes.string,
  /**
   * onChange callback function
   */
  onChange: PropTypes.func,
  /**
   * inline styles passed
   */
  style: PropTypes.object,
  /**
   * totalcols size in number based on slds grid-system
   * Ref. https://www.lightningdesignsystem.com/utilities/sizing/
   */
  totalCols: PropTypes.number,
};

const defaultProps = {
  children: [],
  className: '',
  cols: 1,
  label: '',
  name: '',
  onChange: () => {},
  style: '',
  totalCols: 1,
};

class CheckboxGroup extends Component {
  constructor() {
    super();
    this.selectedValues = [];
  }

  handleChange = e => {
    const { onChange } = this.props;
    const value = e.target.value;
    if (onChange) {
      if (e.target.checked) {
        this.selectedValues.push(value);
      } else {
        this.selectedValues.splice(this.selectedValues.indexOf(value), 1);
      }
      onChange(e, this.selectedValues);
    }
  };

  renderControl = checkbox =>
    React.cloneElement(checkbox, {
      name: this.props.name,
    });

  render() {
    const { className, label, totalCols, cols, style, children } = this.props;
    const grpClassNames = classnames(
      className,
      'slds-form-element',
      typeof totalCols === 'number'
        ? `slds-size--${cols || 1}-of-${totalCols}`
        : null,
    );
    const grpStyles =
      typeof totalCols === 'number'
        ? { display: 'inline-block', ...style }
        : style;

    return (
      <fieldset
        className={grpClassNames}
        style={grpStyles}
        onChange={this.handleChange}
      >
        <legend className="slds-form-element__label slds-form-element__label--top">
          {label}
        </legend>
        <div className="slds-form-element__control">
          {React.Children.map(children, this.renderControl)}
        </div>
      </fieldset>
    );
  }
}

CheckboxGroup.propTypes = propTypes;

CheckboxGroup.defaultProps = defaultProps;

export default CheckboxGroup;
