import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children provided to the List component
   */
  children: PropTypes.node,
  /**
   * classname for the Dropdown
   */
  className: PropTypes.string,
  /**
   * The function when the Dropdown Item is disabled or not 
   */
  isDisabled: PropTypes.bool,
  /**
   * The function to handle the click of the MenuItem
   */
  onBlur: PropTypes.func,
  /**
   * The function to handle the click of the MenuItem
   */
  onClick: PropTypes.func,
  /**
   * The function to handle the focus of the MenuItem
   */
  onFocus: PropTypes.func,
  /**
   * The tabIndex
   */
  tabIndex: PropTypes.number,
};

const defaultProps = {
  children: [],
  className: '',
  isDisabled: false,
  onBlur: null,
  onClick: null,
  onFocus: null,
  tabIndex: null,
};

class MenuItem extends Component {
  handleKeyDown = ({ e, ...args }) => {
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

  handleBlur = e => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e);
    }
  };

  handleFocus = e => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(e);
    }
  };

  render() {
    const { children, className, isDisabled, onClick, tabIndex } = this.props;
    const menuItemClass = classnames('slds-dropdown__item', className);
    return (
      <li role="presentation" className={menuItemClass}>
        <a
          className="slds-truncate react-slds-menuitem"
          role="menuitem"
          aria-disabled={isDisabled}
          tabIndex={!isDisabled && tabIndex}
          onClick={!isDisabled && onClick}
          onKeyDown={!isDisabled && this.handleKeyDown}
          onBlur={!isDisabled && this.handleBlur}
          onFocus={!isDisabled && this.handleFocus}
        >
          {children}
        </a>
      </li>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
