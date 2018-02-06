
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from './../Icon';


const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  iconRight: PropTypes.string,
  disabled: PropTypes.bool,
  divider: PropTypes.oneOf(['top', 'bottom']),
  tabIndex: PropTypes.number,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  children: PropTypes.node,
};

class DropdownMenuItem extends Component {
  onKeyDown = ({ e, ...args }) => {
    const { onClick } = this.props;
    if (e.keyCode === 13 || e.keyCode === 32) { // return or space
      e.preventDefault();
      e.stopPropagation();
      if (onClick) {
        onClick(e, ...args);
      }
    } else if (e.keyCode === 40 || e.keyCode === 38) {
      e.preventDefault();
      e.stopPropagation();
      const currentEl = e.target.parentElement;
      let itemEl = e.keyCode === 40 ? currentEl.nextSibling : currentEl.previousSibling;
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

  onBlur = (e) => {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  onFocus = (e) => {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  render() {
    const {
      className, label, icon, iconRight, selected, disabled, divider, tabIndex = 0, onClick,
      children, ...props
    } = this.props;
    const menuItemClass = classnames(
      'slds-dropdown__item', {
        'slds-is-selected': selected,
        [`slds-has-divider--${divider}-space`]: divider,
      },
      className,
    );
    return (
      <li className={menuItemClass} disabled={disabled}>
        <a
          className="slds-truncate react-slds-menuitem"
          role="menuitem"
          aria-disabled={disabled}
          tabIndex={disabled ? null : tabIndex}
          onClick={disabled ? null : onClick}
          onKeyDown={disabled ? null : this.onKeyDown}
          onBlur={disabled ? null : this.onBlur}
          onFocus={disabled ? null : this.onFocus}
          {...props}
        >
          <p className="slds-truncate">
            {icon ? <Icon icon={icon} size="x-small" align="left" /> : null}
            {label || children}
          </p>
          {iconRight ? <Icon icon={iconRight} size="x-small" align="right" /> : null}
        </a>
      </li>
    );
  }
}

DropdownMenuItem.propTypes = propTypes;

export default DropdownMenuItem;
