import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import keycoder from 'keycoder';
import Icon from '../Icon';
import { FormElement } from '../Form';
import Text from '../Text';
import { uuid, registerStyle } from '../utils';

import InputField from './InputField';

const propTypes = {
  addonLeft: PropTypes.string,
  addonRight: PropTypes.string,
  bare: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  iconLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  iconRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  inputRef: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  symbolPattern: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

const defaultProps = {
  addonLeft: null,
  addonRight: null,
  bare: false,
  className: '',
  defaultValue: '',
  iconLeft: null,
  iconRight: null,
  inputRef: () => true,
  onChange: () => true,
  onKeyDown: () => true,
  placeholder: '',
  readOnly: false,
  symbolPattern: null,
  value: '',
};

class Input extends Component {
  renderAddon(content) {
    return (
      <Text
        tag="span"
        className="slds-form-element__addon"
        category="body"
        type="regular"
      >
        { content }
      </Text>
    );
  }

  renderIcon(icon, align) {
    return (
      React.isValidElement(icon) ? icon :
        <Icon
        icon={icon}
        className={classnames('slds-input__icon', `slds-input__icon--${align}`, 'slds-icon-text-default')}
      />
    );
  }

  render() {
    const {...props} = this.props;
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
      <div className={ inputClassName }>
        { addonLeft ? this.renderAddon(addonLeft) : undefined }
        { iconLeft ? this.renderIcon(iconLeft, 'left') : undefined }
        <InputField {...inputProps} />
        { iconRight ? this.renderIcon(iconRight, 'right') : undefined }
        { addonRight ? this.renderAddon(addonRight) : undefined }
      </div>
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
Input.isFormElement = true;

export default Input;
