import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cols: PropTypes.number,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({
      message: PropTypes.string,
    }),
  ]),
  formElementRef: PropTypes.func,
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  readOnly: PropTypes.bool,
  totalCols: PropTypes.number,
};

const defaultProps = {
  cols: 1,
  error: false,
  formElementRef: null,
  id: '',
  isRequired: false,
  label: '',
  readOnly: false,
  totalCols: 1,
};

class FormElement extends React.Component {
  renderFormElement = props => {
    const { className, error, totalCols, cols, formElementRef, children } = props;
    const formElementClassNames = classnames(
      'FormElement',
      'slds-form-element',
      {
        'slds-has-error': error,
        [`slds-size--${cols}-of-${totalCols}`]: typeof totalCols === 'number',
      },
      className,
    );
    return (
      <div ref={formElementRef} key="form-element" className={formElementClassNames}>
        {children}
      </div>
    );
  };

  renderLabel = () => {
    const { id, label, isRequired } = this.props;
    return label ? (
      <label
        key="form-element-label"
        className="FormElement__label slds-form-element__label"
        htmlFor={id}
      >
        {label}
        {isRequired && <abbr className="slds-isRequired">*</abbr>}
      </label>
    ) : null;
  };

  renderControl = () => {
    const { children, error, readOnly } = this.props;
    const formElementControlClassNames = classnames(
      'FormElement__control',
      'slds-form-element__control',
      {
        'slds-has-divider--bottom': readOnly,
      },
    );
    return (
      <div key="form-element-control" className={formElementControlClassNames}>
        {children}
        {this.renderError(error)}
      </div>
    );
  };

  renderError = error => {
    if (!error) return null;

    let errorMessage;
    if (typeof error === 'string') {
      errorMessage = error;
    } else if (typeof error === 'object') {
      errorMessage = error.message;
    } else {
      return null;
    }

    return (
      <span key="slds-form-error" className="FormElement__help slds-form-element__help">
        {errorMessage}
      </span>
    );
  };

  render() {
    const { className, totalCols, cols, error, children, ...props } = this.props;
    const labelElem = this.renderLabel();
    const controlElem = this.renderControl();
    const formElemChildren = [labelElem, controlElem];
    return this.renderFormElement({
      ...props,
      children: formElemChildren,
      className,
      cols,
      error,
      totalCols,
    });
  }
}

FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;
FormElement.isFormElement = true;

export default FormElement;
