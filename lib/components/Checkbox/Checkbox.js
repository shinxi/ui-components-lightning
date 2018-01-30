import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uuid } from './../utils';
import './Checkbox.scss';

const propTypes = {
  /**
   * className that will be used for styling the wrapper div and its children /checkbox element
   */
  className: PropTypes.string,
  /**
   * User configured Boolean that sets the state of checkbox, checked/unchecked
   */
  isChecked: PropTypes.bool,
  /**
   * If disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Field uuid
   */
  id: PropTypes.string,
  /**
   * Defaults to an empty string
   */
  label: PropTypes.string,
  /**
   * onChange callback function
   */
  onChange: PropTypes.func,
  /**
   * Value that is string
   */
  value: PropTypes.string,
};

const defaultProps = {
  className: '',
  isChecked: false,
  isDisabled: false,
  label: '',
  onChange: () => {},
  value: '',
};

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked,
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
    const { className, isDisabled, id = defaultId, label } = this.props;
    const { isChecked, value } = this.state;
    const classes = classnames(className, 'slds-checkbox');
    return (
      <label htmlFor={id} className={classes}>
        <input
          checked={isChecked}
          disabled={isDisabled}
          id={id}
          onChange={this.handleChange}
          type="checkbox"
          value={value}
        />
        <span className="slds-checkbox--faux" />
        <span className="slds-form-element__label">{label}</span>
      </label>
    );
  }
}

Checkbox.propTypes = propTypes;

Checkbox.defaultProps = defaultProps;

export default Checkbox;
