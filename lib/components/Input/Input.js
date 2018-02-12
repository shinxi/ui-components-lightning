import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import Text from '../Text';
import { uuid } from '../utils';

import InputField from './InputField';

const propTypes = {
  /**
   * Used to add-on any string of text to the left side of the Input field as a seperate element.
   */
  addonLeft: PropTypes.string,
  /**
   * Used to add-on any string of text to the right side of the Input field as a seperate element.
   */
  addonRight: PropTypes.string,
  /**
   * Boolean value to control if the input field gets rendered in it's "bare" form
   */
  bare: PropTypes.bool,
  /**
   * Custom classnames that are passed in
   */
  className: PropTypes.string,
  /**
   * Icon to be rendered on the left side of the field, can be either an Icon or string
   */
  iconLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /**
   * Icon to be rendered on the right side of the field, can be either an Icon or string
   */
  iconRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /**
   * Ref to be used for the field, assisting in form validation.
   */
  inputRef: PropTypes.func,
  /**
   * Event to be fired when the user removes focus from the field
   */
  onBlur: PropTypes.func,
  /**
   * Event to be fired when the user focuses on the field
   */
  onFocus: PropTypes.func,
  /**
   * Event to be fired when the user presses any key
   */
  onKeyDown: PropTypes.func,
  /**
   * Event to be fired when the input field value is changed.
   */
  onValueChange: PropTypes.func,
  /**
   * Placeholder for the input field to assist the user what should be entered
   */
  placeholder: PropTypes.string,
  /**
   * Should the field be rendered as read-only?
   */
  readOnly: PropTypes.bool,
  /**
   * Used with the onKeyDown fn, RegEx pattern to match keyboard characters that will trigger the
   * onKeyDown event. If passed, non-matches will not trigger the event
   */
  symbolPattern: PropTypes.string,
  /**
   * The type of the input field; 'text', 'password', 'hidden'
   */
  type: PropTypes.string,
  /**
   * Value of the input field set as part of the render.
   */
  value: PropTypes.string,
};

const defaultProps = {
  addonLeft: null,
  addonRight: null,
  bare: false,
  className: '',
  iconLeft: null,
  iconRight: null,
  inputRef: () => true,
  onBlur: () => true,
  onFocus: () => true,
  onKeyDown: () => true,
  onValueChange: () => true,
  placeholder: '',
  readOnly: false,
  symbolPattern: '',
  type: 'text',
  value: '',
};

class Input extends Component {
  renderAddon = (content) => (
    <Text
      tag="span"
      className="slds-form-element__addon"
      category="body"
      type="regular"
    >
      { content }
    </Text>
  );

  renderIcon = (icon, align) => {
    if (React.isValidElement(icon)) {
      return icon;
    }
    const iconClasses = classnames('slds-input__icon',
      `slds-input__icon--${align}`,
      'slds-icon-text-default');
    return (
      <Icon
        icon={icon}
        className={iconClasses}
      />
    );
  }

  render() {
    const { ...props } = this.props;
    const { iconLeft, iconRight, addonLeft, addonRight, ...inputProps } = props;
    inputProps.id = `input-${uuid()}`;
    let inputClassName;
    if (iconLeft || iconRight || addonLeft || addonRight) {
      inputClassName = classnames(
        'Input',
        'slds-form-element__control',
        { 'slds-input-has-icon': iconLeft || iconRight },
        { 'slds-input-has-icon--left-right': iconLeft && iconRight },
        { 'slds-input-has-icon--left': iconLeft },
        { 'slds-input-has-icon--right': iconRight },
        { 'slds-input-has-fixed-addon': addonLeft || addonRight },
      );
    } else {
      inputClassName = classnames('Input');
    }
    return (
      <div className={inputClassName}>
        {addonLeft && this.renderAddon(addonLeft)}
        {iconLeft && this.renderIcon(iconLeft, 'left')}
        <InputField {...inputProps} />
        {iconRight && this.renderIcon(iconRight, 'right')}
        {addonRight && this.renderAddon(addonRight)}
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
Input.isFormElement = true;

export default Input;
