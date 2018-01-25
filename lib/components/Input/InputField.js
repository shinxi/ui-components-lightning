import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import keycoder from 'keycoder';

const propTypes = {
  bare: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  inputRef: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  symbolPattern: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  }

  onChange(event) {
    const newVal = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      value: newVal,
    }));
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
      className, bare, value, onKeyDown, onValueChange,
      ...inputProps
    } = this.props;
    const inputClassNames = classnames(className, 'Input__field',
      bare ? 'slds-input--bare' : 'slds-input',
    );
    return (
      <input
        className={inputClassNames}
        onChange={event => {
          this.props.onValueChange.call(this, event);
          this.onChange(event);
        }}
        onKeyDown={this.onKeyDown}
        value={this.state.value}
        {...inputProps}
      />
    );
  }
}

InputField.propTypes = propTypes;

export default InputField;
