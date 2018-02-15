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
    * Value for the Option element
  */
  value: PropTypes.string,

};

const defaultProps = {
  children: [],
  label: '',
};

const Option = props => {
  const { children, label, value, ...optionProps } = props;

  return <option {...optionProps}>{label || children}</option>;
};

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;

export default Option;
