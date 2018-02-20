import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Row from './Row';

const propTypes = {
  /**
   * Children of FieldSet
   */
  children: PropTypes.node,
  /** 
   * Custom classNames besides default ones
   */
  className: PropTypes.string,
  /**
   * FieldSet title
   */
  label: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  label: '',
};

const FieldSet = ({ className, label, children, ...props }) => {
  const fsClassNames = classnames('Form__compound', className, 'slds-form--compound');
  return (
    <fieldset className={fsClassNames} {...props}>
      {label && <legend className="slds-form-element__label">{label}</legend>}
      <div className="form-element__group">{children}</div>
    </fieldset>
  );
};

FieldSet.propTypes = propTypes;
FieldSet.defaultProps = defaultProps;
FieldSet.isFormElement = true;
FieldSet.Row = Row;

export default FieldSet;
