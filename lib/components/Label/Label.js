import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.element,
  /**
   * Extra classNames besides the default ones
   */
  className: PropTypes.string,
  /**
   * Native html "for" attribute
   */
  htmlFor: PropTypes.string,
  /**
   * Display a star at top-right corner
   */
  isRequired: PropTypes.bool,
};

const defaultProps = {
  htmlFor: null,
  isRequired: false,
};

const Label = ({ className, children, isRequired, htmlFor, ...props }) => {
  const labelClassNames = classnames('Label', className, 'slds-form-element__label');
  return (
    <label className={labelClassNames} htmlFor={htmlFor} {...props}>
      {children}
      {isRequired && <abbr className="Label__isRequired slds-isRequired">*</abbr>}
    </label>
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
