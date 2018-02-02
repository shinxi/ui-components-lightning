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
   * Defaults to an empty string
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
  totalCols: 1,
};

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.selectedValues = [];
    this.initialize();
  }

  initialize() {
    const { children } = this.props;
    React.Children.forEach(children, (child) => {
      if (child.props.isChecked) {
        // Retaining the defauledChecked part of selectedValues
        this.selectedValues.push(child.props.value);
      }
    });
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

  renderCheckbox = checkbox =>
    React.cloneElement(checkbox, {
      name: this.props.name,
    });

  render() {
    const { className, label, totalCols, cols, children } = this.props;
    const groupClassNames = classnames(
      'Checkbox__group',
      className,
      'slds-form-element',
      typeof totalCols === 'number'
        ? `slds-size--${cols || 1}-of-${totalCols}`
        : null,
    );

    return (
      <fieldset
        className={groupClassNames}
        onChange={this.handleChange}
      >
        <legend className="slds-form-element__label slds-form-element__label--top">
          {label}
        </legend>
        <div className="slds-form-element__control">
          {React.Children.map(children, this.renderCheckbox)}
        </div>
      </fieldset>
    );
  }
}

CheckboxGroup.propTypes = propTypes;

CheckboxGroup.defaultProps = defaultProps;

export default CheckboxGroup;
