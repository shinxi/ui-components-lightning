import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormElement } from '../Form';
import { uuid } from '../utils';

const propTypes = {
  className: PropTypes.string,
  cols: PropTypes.number,
  error: FormElement.propTypes.error,
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  totalCols: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  cols: 1,
  error: false,
  id: undefined,
  isChecked: false,
  isDisabled: false,
  isRequired: false,
  label: '',
  name: '',
  onChange: null,
  totalCols: 1,
  value: '',
};

class Toggle extends Component {
  defaultId = uuid();

  render() {
    const {
      isRequired,
      error,
      totalCols,
      cols,
      label,
      id,
      className,
      isChecked,
      isDisabled,
      onChange,
      ...props
    } = this.props;
    const formElemProps = { cols, error, id, isRequired, label, totalCols };
    const toggleClassNames = classnames('Toggle', className, 'slds-checkbox--toggle slds-grid');
    return (
      <FormElement {...formElemProps}>
        <label htmlFor={id} className={toggleClassNames}>
          <input
            id={id}
            name="checkbox"
            type="checkbox"
            aria-describedby="toggle-desc"
            checked={isChecked}
            disabled={isDisabled}
            onChange={onChange}
            {...props}
          />
          <span className="slds-checkbox--faux_container" aria-live="assertive">
            <span className="slds-checkbox--faux" />
            <span className="slds-checkbox--on">Enabled</span>
            <span className="slds-checkbox--off">Disabled</span>
          </span>
        </label>
      </FormElement>
    );
  }
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
