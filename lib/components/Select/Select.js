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
   * className that will be used for styling wrapper Div - Select
   */
  cols: PropTypes.number,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  totalCols: PropTypes.number,
  /**
   * OptionsArray can be provided to the select element as well
   */
  optionsArray: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  ),
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
    const optionsArray = this.props;
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
        {/* {this.state.optionsArray && this.getOptions } */}
        { children }
      </select>
    );
  }
}

Select.propTypes = propTypes;

export default Select;
