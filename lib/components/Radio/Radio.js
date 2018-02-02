import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uuid } from './../utils';

const propTypes = {
  /**
   * Custom classname passed into the component
   */
  className: PropTypes.string,
  /**
   * uuid for the field
   */
  id: PropTypes.bool,
  /**
   * Should the field be defaultChecked
   */
  isChecked: PropTypes.bool,
  /**
   * Display text description for the Radion option
   */
  label: PropTypes.string,
  /**
   * unique name property to Radio option
   */
  name: PropTypes.string.isRequired,
  /**
   * Change handler
   */
  onChange: () => {},
  /**
   * value property to Radio option
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  className: '',
  label: '',
  onChange: () => {},
  value: '',
};

class Radio extends React.Component {
  handleChange = event => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(event);
    }
  };

  render() {
    const defaultId = `radio-${uuid()}`;
    const { className, label, name, id = defaultId, value, isChecked } = this.props;
    const radioClassNames = classnames(className, 'slds-radio');
    return (
      <label htmlFor={id} className={radioClassNames}>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={isChecked}
          onChange={this.handleChange}
        />
        <span className="slds-radio--faux" />
        <span className="slds-form-element__label">{label}</span>
      </label>
    );
  }
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;
