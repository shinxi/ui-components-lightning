import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { uuid } from './../utils';

const VALID_LENGTHS = ['auto', 'tiny', 'small', 'regular', 'large', 'huge'];
const VALID_STATES = ['none', 'warning', 'error', 'success'];

const propTypes = {
  /**
   * ClassName to be added
   */
  className: PropTypes.string,
  /**
   * Field uuid
   */
  id: PropTypes.string,
  /**
   * Will mark the component as readOnly
   */
  isReadOnly: PropTypes.bool,
  /**
   * Will mark the component as disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Length (width) of the input field, auto = 100%
   */
  length: PropTypes.oneOf(VALID_LENGTHS),
  /**
   * Name of the field used in form submission
   */
  name: PropTypes.string,
  /**
   * External onChange event to be fired when the component changes
   */
  onValueChange: PropTypes.func,
  /**
   * A placeholder string to be displayed before data is entered
   */
  placeholder: PropTypes.string,
  /**
   * How many rows of text to render by default
   */
  rows: PropTypes.number,
  /**
   * Validation state for the component
   */
  state: PropTypes.oneOf(VALID_STATES),
  /**
   * The value of the form component
   */
  value: PropTypes.string,
};

const defaultProps = {
  className: '',
  isReadOnly: false,
  isDisabled: false,
  length: 'auto',
  name: null,
  onValueChange: () => {},
  placeholder: null,
  rows: 5,
  state: 'none',
  value: '',
  error: '',
  required: false,
};

const determineLengthClass = length =>
  (VALID_LENGTHS.indexOf(length) > -1 && length !== 'auto' ? `input--${length}` : '');

const determineStateClass = (state) =>
  (VALID_STATES.indexOf(state) > -1 && state !== 'none' ? `validation-${state}` : '');

class Textarea extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange = event => {
    const { onValueChange } = this.props;
    const value = event.target.value;
    event.persist();
    this.setState({ value },
      () => {
        if (onValueChange) {
          onValueChange(event);
        }
      },
    );
  };

  render() {
    const defaultId = `form-element-${uuid()}`;
    const { length, state, className, id = defaultId, name, placeholder,
      isDisabled, isReadOnly, rows } = this.props;
    const classes = classNames(
      determineLengthClass(length),
      determineStateClass(state),
      className,
      'slds-input', // slds class,
    );
    return (
      <textarea
        id={id}
        name={name}
        className={classes}
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={placeholder}
        disabled={isDisabled}
        readOnly={isReadOnly}
        rows={rows}
      />
    );
  }
}

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

Textarea.validStates = VALID_STATES;

export default Textarea;
