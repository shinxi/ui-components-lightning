import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uuid } from './../utils';
import { Option } from '../Select';

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
   * ID for select
   */
  label: PropTypes.string,
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

  onChange = (e) => {
    const value = e.target.value;
    if (this.props.onChange) {
      this.props.onChange(e, value);
    }
  }

  getOptions = () => {
    const optionsArray = this.props.optionsArray;
    let customOptions = [];
    customOptions = optionsArray.map((option) => (
      <Option value={option.value} label={option.label} />
    ));
    return customOptions;
  };

  render() {
    const id = this.props.id || this.state.id;
    const { className, children, optionsArray, ...props } = this.props;
    const selectClassNames = classnames('Select', className, 'slds-select');
    return (
      <select
        id={id}
        className={selectClassNames}
        onChange={this.onChange}
        {...props}
      >
        {optionsArray && this.getOptions() }
        { children }
      </select>
    );
  }
}

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
