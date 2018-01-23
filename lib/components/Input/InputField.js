import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import keycoder from 'keycoder';

const propTypes = {
  bare: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  symbolPattern: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

class InputField extends Component {
  onChange = (e) => {
    const value = e.target.value;
    if (this.props.onChange) {
      this.props.onChange(e, value);
    }
  }

  onKeyDown = (e) => {
    const { symbolPattern, onKeyDown } = this.props;
    if (symbolPattern) {
      const { keyCode, shiftKey } = e;
      const value = keycoder.toCharacter(keyCode, shiftKey);
      if (value && !value.match(new RegExp(symbolPattern))) {
        e.preventDefault();
        return;
      }
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  render() {
    const {
      id, readOnly, className, inputRef, type, bare, value, defaultValue,
      ...inputProps
    } = this.props;
    const inputClassNames = classnames(className, 'Input__field',
      bare ? 'slds-input--bare' : 'slds-input',
    );
    return (
      <input
        id={id}
        ref={inputRef}
        className={inputClassNames}
        type={type}
        value={value}
        defaultValue={defaultValue}
        readOnly={readOnly}
        {...inputProps}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

InputField.propTypes = propTypes;

export default InputField;
