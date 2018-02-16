import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uuid } from './../utils';
import Option from './Option';

const propTypes = {
  /**
   * Children Elements
   */
  children: PropTypes.node,
  /**
   * className that will be used for styling wrapper Div - Select
   */
  className: PropTypes.string,
  /**
   * ID for select
   */
  id: PropTypes.string,
  /**
   * Label for Select
   */
  label: PropTypes.string,
  /**
   * Name for Select
   */
  name: PropTypes.string,
  /**
   * Function to handle onChange
   */
  onChange: PropTypes.func,
  /**
   * OptionsArray can be provided to the select element as well
   */
  optionsArray: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  ),
};

const defaultProps = {
  children: [],
  className: '',
  id: null,
  label: '',
};

class Select extends Component {
  constructor() {
    super();
    this.state = { id: `form-element-${uuid()}` };
  }

  getOptions = () => {
    const { optionsArray } = this.props;
    let customOptions = [];
    customOptions = optionsArray.map(option => (
      <Option value={option.value} label={option.label} />
    ));
    return customOptions;
  };

  handleChange = e => {
    const value = e.target.value;
    const { onChange } = this.props;
    if (onChange) {
      onChange(e, value);
    }
  };

  render() {
    const id = this.props.id || this.state.id;
    const { className, children, optionsArray, name, ...props } = this.props;
    const selectClassNames = classnames('Select', className, 'slds-select');
    return (
      <select
        id={id}
        className={selectClassNames}
        onChange={this.handleChange}
        name={name}
        {...props}
      >
        {optionsArray && this.getOptions()}
        {children}
      </select>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
