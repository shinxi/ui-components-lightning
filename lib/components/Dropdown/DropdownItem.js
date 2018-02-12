import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  /**
   * classname for the DropDownItem
   */
  className: PropTypes.string,
  /**
   * Children provided for the DropDownItem
   */
  children: PropTypes.node,
  /**
   * A boolean to indicate if the Dropdown shold show on hover
   */
  hoverPopup: PropTypes.bool,
  /**
   * A boolean to indicate if the Dropdown items are diabled
   */
  isDisabled: PropTypes.bool,
  /**
   * The function when user clicks on the Dropdown Item
   */  
  onClick: PropTypes.func,
  /**
   * The function when the onBlur function happens
   */
  onBlur: PropTypes.func,
  /**
   * The function when the onBlur function happens
   */
  onClose: PropTypes.func,
  /**
   * The function when the Dropdown Item gets focus
   */
  onFocus: PropTypes.func,
  /**
   * The function when the Dropdown Item is selected 
   */
  selected: PropTypes.bool,
  /**
   * The tabIndex
   */
  tabIndex: PropTypes.number,
};

const defaultProps = {
  className: '',
  children: [],
  isDisabled: false,
  onClick: () => {},
  onClose: () => {},
  onBlur: () => {},
  onFocus: () => {},
  selected: false,
  tabIndex: null,
};

class DropdownItem extends Component {
  onKeyDown = ({ e, ...args }) => {
    const { onClick } = this.props;
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      e.stopPropagation();
      if (onClick) {
        onClick(e, ...args);
      }
    } else if (e.keyCode === 40 || e.keyCode === 38) {
      e.preventDefault();
      e.stopPropagation();
      const currentEl = e.target.parentElement;
      let itemEl =
        e.keyCode === 40 ? currentEl.nextSibling : currentEl.previousSibling;
      while (itemEl) {
        const anchorEl = itemEl.querySelector('.react-slds-menuitem[tabIndex]');
        if (anchorEl && !anchorEl.disabled) {
          anchorEl.focus();
          return;
        }
        itemEl = e.keyCode === 40 ? itemEl.nextSibling : itemEl.previousSibling;
      }
    }
  };

  onBlur = e => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  onClose = () => {

  };

  onFocus = e => {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  render() {
    const { children, className, isDisabled, onClick, tabIndex } = this.props;
    const dropdownListItemClass = classNames(
      'slds-dropdown__item',
      className);
    return (
      <li role="presentation" className={dropdownListItemClass}>
        <a
          className="slds-truncate react-slds-menuitem"
          role="menuitem"
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? null : tabIndex}
          onClick={isDisabled ? null : onClick}
          onKeyDown={isDisabled ? null : this.onKeyDown}
          onBlur={isDisabled ? null : this.onBlur}
          onFocus={isDisabled ? null : this.onFocus}
        >
          {children}
        </a>
      </li>
    );
  }
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
