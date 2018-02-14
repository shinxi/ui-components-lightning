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
   * The tabIndex
   */
  tabIndex: PropTypes.number,
};

const defaultProps = {
  children: [],
  className: '',
  isDisabled: false,
  onBlur: () => {},
  onClick: () => {},
  tabIndex: null,
};

class MenuItem extends Component {
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

  onFocus = e => {
    if (this.props.onFocus) {
      this.props.onFocus(e);
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

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
