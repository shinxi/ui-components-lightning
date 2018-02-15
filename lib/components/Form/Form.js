import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FORM_TYPES = ['stacked', 'horizontal', 'inline', 'compound'];

const propTypes = {
  /**
   * Children of Form
   */
  children: PropTypes.node,
  /**
   * Custom classNames besides default ones
   */
  className: PropTypes.string,
  /**
   * Form layout choice
   */
  type: PropTypes.oneOf(FORM_TYPES),
};

const defaultProps = {
  type: 'stacked',
};

const Form = ({ className, type, children, ...props }) => {
  const formClassNames = classnames('Form', className, `slds-form--${type}`);
  return (
    <form className={formClassNames} {...props}>
      {children}
    </form>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
