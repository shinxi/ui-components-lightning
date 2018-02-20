import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
    * Children elements
  */
  children: PropTypes.node,
  /**
    * Label for the Option element
  */
  label: PropTypes.string,
  /**
    * Value to be passing in for the Option element
  */
  value: PropTypes.string,

};

const defaultProps = {
  children: [],
  label: '',
};

const Option = props => {
  const { children, value, label, ...optionProps } = props;

  return <option {...optionProps} value={value}>{ children.length && children || label}</option>;
};

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;

export default Option;
