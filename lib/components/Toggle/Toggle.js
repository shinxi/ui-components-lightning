import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uuid } from '../utils';

const propTypes = {
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabledText: PropTypes.string,
  enabledText: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  defaultChecked: false,
  disabledText: 'Disabled',
  enabledText: 'Enabled',
  id: undefined,
  isDisabled: false,
  onChange: null,
  value: '',
};

class Toggle extends Component {
  state = { isChecked: this.props.defaultChecked };

  defaultId = uuid();

  handleToggleChange = event => {
    const { onChange } = this.props;
    event.persist();
    this.setState(
      prevState => ({ isChecked: !prevState.isChecked }),
      () => {
        if (onChange) onChange(event);
      },
    );
  };

  render() {
    const {
      id = this.defaultId,
      className,
      disabledText,
      enabledText,
      defaultChecked,
      isDisabled,
      onChange,
      ...props
    } = this.props;
    const toggleClassNames = classnames('Toggle', className, 'slds-checkbox--toggle slds-grid');
    return (
      <label htmlFor={id} className={toggleClassNames}>
        <input
          id={id}
          name="checkbox"
          type="checkbox"
          aria-describedby="toggle-desc"
          checked={this.state.isChecked}
          disabled={isDisabled}
          onChange={this.handleToggleChange}
          {...props}
        />
        <span className="slds-checkbox--faux_container" aria-live="assertive">
          <span className="slds-checkbox--faux" />
          <span className="slds-checkbox--on">{enabledText}</span>
          <span className="slds-checkbox--off">{disabledText}</span>
        </span>
      </label>
    );
  }
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
