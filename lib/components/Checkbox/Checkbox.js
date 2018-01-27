import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uuid } from './../utils';

const propTypes = {
  /**
   * className that will be used for styling the wrapper div and its children /checkbox element
   */
  className: PropTypes.string,
  /**
   * User configured Boolean that sets the state of checkbox, checked/unchecked
   */
  checked: PropTypes.bool,
  /**
   * If disabled
   */
  disabled: PropTypes.bool,
  /**
   * Field uuid
   */
  id: PropTypes.string,
  /**
   * Label to display just next to checkbox. If no label is provided, empty string will be returned
   * as defaultProp.
   */
  label: PropTypes.string,
  /**
   * onChange callback function
   */
  onChange: PropTypes.func,
  /**
   * Value that is string or number type
   */
  value: PropTypes.string,
};

const defaultProps = {
  className: '',
  checked: false,
  disabled: false,
  label: '',
  onChange: () => {},
  value: '',
};

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked,
      value: props.value,
    };
  }

  handleChange = event => {
    const { onChange } = this.props;
    event.persist();
    this.setState(
      {
        isChecked: !this.state.isChecked,
      },
      () => {
        if (onChange) {
          onChange(event);
        }
      },
    );
  };

  render() {
    const defaultId = `form-element-${uuid()}`;
    const { className, disabled, id = defaultId, label } = this.props;
    const { isChecked, value } = this.state;
    const classes = classnames(className, 'slds-checkbox');
    return (
      <label htmlFor={id} className={classes}>
        <input
          checked={isChecked}
          disabled={disabled}
          id={id}
          onChange={this.handleChange}
          type="checkbox"
          value={value}
        />
        <span className="slds-checkbox--faux" style={{ marginRight: '.5rem' }} />
        <span className="slds-form-element__label">{label}</span>
      </label>
    );
  }
}

Checkbox.propTypes = propTypes;

Checkbox.defaultProps = defaultProps;

export default Checkbox;
