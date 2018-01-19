import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Datepicker from './Datepicker';
import { autoAlign } from './../utils';

/**
 *
 */
class DatepickerDropdown extends Component {
  static propTypes = {
    className: PropTypes.string,
    align: PropTypes.oneOf(['left', 'right']),
    vertAlign: PropTypes.oneOf(['top', 'bottom']),
    dateValue: PropTypes.string,
    minDate: PropTypes.string,
    maxDate: PropTypes.string,
    elementRef: PropTypes.func,
    extensionRenderer: PropTypes.func,
    onSelect: PropTypes.func,
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
  };

  render() {
    const {
      className,
      align,
      vertAlign,
      dateValue,
      minDate,
      maxDate,
      extensionRenderer,
      elementRef,
      onSelect,
      onBlur,
      onClose,
    } = this.props;
    const datepickerClassNames = classnames(
      className,
      'slds-dropdown',
      align ? `slds-dropdown--${align}` : undefined,
      vertAlign ? `slds-dropdown--${vertAlign}` : undefined,
    );
    const handleDOMRef = (node) => {
      this.node = node;
      if (elementRef) {
        elementRef(node);
      }
    };
    return (
      <Datepicker
        elementRef={handleDOMRef}
        className={datepickerClassNames}
        selectedDate={dateValue}
        autoFocus
        minDate={minDate}
        maxDate={maxDate}
        extensionRenderer={extensionRenderer}
        onSelect={onSelect}
        onBlur={onBlur}
        onClose={onClose}
      />
    );
  }
}

const DatepickerDropdownPortal = autoAlign({
  triggerSelector: '.slds-dropdown-trigger',
})(DatepickerDropdown);
export default DatepickerDropdownPortal;
