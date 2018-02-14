import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  /**
   * Custom classNames besides default ones
   */
  className: PropTypes.string,
  /**
   * Number of columns
   */
  cols: PropTypes.number,
  /**
   * Error message
   */
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({
      message: PropTypes.string,
    }),
  ]),
  /**
   * Ref function
   */
  formElementRef: PropTypes.func,
  /**
   * Read-only form element
   */
  isReadOnly: PropTypes.bool,
  /**
   * Total number of columns
   */
  totalCols: PropTypes.number,
};

const defaultProps = {
  cols: 1,
  error: false,
  formElementRef: null,
  isReadOnly: false,
  isRequired: false,
  totalCols: null,
};

class FormElement extends React.Component {
  renderControl = () => {
    const { children, error, isReadOnly } = this.props;
    const formElementControlClassNames = classnames(
      'FormElement__control',
      'slds-form-element__control',
      {
        'slds-has-divider--bottom': isReadOnly,
      },
    );
    return (
      <div className={formElementControlClassNames}>
        {React.Children.toArray(children).find(comp => !comp.type.isFormLabel)}
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

    return <span className="FormElement__help slds-form-element__help">{errorMessage}</span>;
  };

  render() {
    const { className, totalCols, cols, error, children, formElementRef } = this.props;
    const formElementClassNames = classnames(
      'FormElement',
      'slds-form-element',
      {
        'slds-has-error': error,
        [`slds-size--${cols}-of-${totalCols}`]: typeof totalCols === 'number',
      },
      className,
    );
    const controlElem = this.renderControl();
    return (
      <div ref={formElementRef} className={formElementClassNames}>
        {React.Children.toArray(children).find(comp => comp.type.isFormLabel)}
        {controlElem}
      </div>
    );
  }
}

FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;
FormElement.isFormElement = true;

export default FormElement;
