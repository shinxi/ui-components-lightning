import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { PicklistItem } from './../Picklist';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuHeader } from './DropdownMenuHeader';

const propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right']),
  vertAlign: PropTypes.oneOf(['top', 'bottom']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  header: PropTypes.string,
  nubbin: PropTypes.oneOf(['top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right', 'auto']),
  nubbinTop: PropTypes.bool, // for backward compatibility. use nubbin instead
  hoverPopup: PropTypes.bool,
  onMenuItemClick: PropTypes.func,
  onMenuClose: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  children: PropTypes.node,
  dropdownMenuRef: PropTypes.func,
  /* eslint-disable react/forbid-prop-types */
  style: PropTypes.object,
};

class DropdownMenu extends Component {
  onMenuItemBlur = e => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e);
    }
  };

  onMenuItemFocus = e => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(e);
    }
  };

  onKeyDown = e => {
    const { onMenuClose } = this.props;
    if (e.keyCode === 27) { // ESC
      if (onMenuClose) {
        onMenuClose();
      }
    }
  };

  renderMenuItem = (menuItem) => {
    const { onClick, onBlur, onFocus, ...props } = menuItem.props;
    const onMenuItemClick = (...args) => {
      if (onClick) { onClick(...args); }
      if (this.props.onMenuItemClick) {
        this.props.onMenuItemClick(props, ...args);
      }
    };
    const onMenuItemFocus = (e) => {
      if (onFocus) { onFocus(e); }
      this.onMenuItemFocus(e);
    };
    const onMenuItemBlur = (e) => {
      if (onBlur) { onBlur(e); }
      this.onMenuItemBlur(e);
    };
    return React.cloneElement(menuItem, {
      onClick: onMenuItemClick,
      onBlur: onMenuItemBlur,
      onFocus: onMenuItemFocus,
    });
  };

  render() {
    const {
      className, align, vertAlign, size, header, nubbinTop, hoverPopup, children, style,
      dropdownMenuRef,
      onFocus, onBlur,
    } = this.props;
    const nubbin = nubbinTop ? 'auto' : this.props.nubbin;
    const nubbinPosition = nubbin === 'auto' ? `${vertAlign} ${align}` : nubbin;
    const dropdownClassNames = classnames(
      className,
      'slds-dropdown',
      `slds-dropdown--${align}`,
      `slds-dropdown--${vertAlign}`,
      size ? `slds-dropdown--${size}` : undefined,
      nubbinPosition ? `slds-nubbin_${nubbinPosition.replace(/\s+/g, '-')}` : undefined,
      { 'react-slds-no-hover-popup': !hoverPopup },
    );
    const handleDOMRef = (node) => {
      this.node = node;
      if (dropdownMenuRef) {
        dropdownMenuRef(node);
      }
    };
    return (
      <div
        role="menuitem"
        className={dropdownClassNames}
        ref={handleDOMRef}
        style={{ outline: 'none', ...style }}
        onKeyDown={this.onKeyDown}
        tabIndex="-1"
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {header ? <DropdownMenuItem>{header}</DropdownMenuItem> : null }
        <ul className="slds-dropdown__list" role="menu">
          { React.Children.map(children, item => (
            item.type === DropdownMenuHeader || item.type === PicklistItem ? this.renderMenuItem(item) : item
          )) }
        </ul>
      </div>
    );
  }
}

// function preventPortalizeOnHoverPopup(Cmp) {
//   // eslint-disable-next-line react/prop-types
//   return props => <Cmp preventPortalize={!!props.hoverPopup} {...props} />;
// }

// export default preventPortalizeOnHoverPopup(autoAlign({
//   triggerSelector: '.slds-dropdown-trigger',
// })(DropdownMenu));

DropdownMenu.propTypes = propTypes;

export default DropdownMenu;
