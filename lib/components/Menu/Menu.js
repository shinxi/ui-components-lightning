import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from '../Button';
import { MenuItem } from '../Menu';

const MENU_ALIGN = ['left', 'right'];
const MENU_SIZE = ['small', 'medium', 'large'];
const MENU_NUBBIN = [
  'top',
  'top left',
  'top right',
  'bottom',
  'bottom left',
  'bottom right',
  'auto',
];
const MENU_VERTICAL_ALIGN = ['top', 'bottom'];

const propTypes = {
  /**
   * Alignment of the Menu
   */
  align: PropTypes.oneOf(MENU_ALIGN),
  /**
   * Children provided to the List component
   */
  children: PropTypes.node,
  /**
   * Classname for the Dropdown
   */
  className: PropTypes.string,
  /**
   * Options can be provided to the List too 
   */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  ),
  /**
   * The carat symbol on the top of the MenuList of a dropdown
   */
  nubbin: PropTypes.oneOf(MENU_NUBBIN),
  /**
   * The onclick handler for menuItem
   */
  onMenuItemClick: PropTypes.func,
  /**
   * Boolean to indicate if menu shows on hover
   */
  shouldShowOnHover: PropTypes.bool,
  /**
   * Size of the List
   */
  size: PropTypes.oneOf(MENU_SIZE),
  /**
   * Vertical Alignment of the List
   */
  vertAlign: PropTypes.oneOf(MENU_VERTICAL_ALIGN),
};

const defaultProps = {
  align: 'left',
  children: [],
  className: '',
  items: null,
  nubbin: '',
  onMenuItemClick: null,
  shouldShowOnHover: false,
  size: 'small',
  vertAlign: 'top',
};

class Menu extends Component {
  constructor(props) {
    super(props);
    const { items } = props;
    this.state = { items };
  }

  getMenuItems = () => {
    let menuItems = [];
    const { children, className } = this.props;
    if (children.length) {
      React.Children.map(children, child => {
        if (child.type !== Button) {
          menuItems.push(
            React.cloneElement(child, {
              className: child.props.className,
              onClick: () => {
                if (child.props.onClick) {
                  child.props.onClick();
                }
                this.handleClick();
              },
            }),
          );
        }
      });
    } else if (this.state.items) {
      const { items } = this.state;
      menuItems = items.map((optionItem, index) => (
        <MenuItem
          onClick={this.handleClick}
          onClose={this.handleListClose}
          value={optionItem.name}
          className={className}
          index={index}
        >
          {optionItem.name}
        </MenuItem>
      ));
    }
    return menuItems;
  };

  handleListClose = () => {
    this.trigger.focus();
    this.setState({ opened: false });
  };

  handleClick = () => {
    const { onMenuItemClick } = this.props;
    if (onMenuItemClick) {
      onMenuItemClick();
    }
  };

  render() {
    const {
      align,
      className,
      shouldShowOnHover,
      nubbin,
      size,
      vertAlign,
    } = this.props;
    const menuItems = this.getMenuItems();
    const nubbinPosition = nubbin === 'auto' ? `${vertAlign} ${align}` : nubbin;

    const menuClassName = classnames(
      'Menu',
      className,
      'slds-dropdown',
      `slds-dropdown--${align}`,
      `slds-dropdown--${vertAlign}`,
      size && `slds-dropdown--${size}`,
      nubbinPosition && `slds-nubbin_${nubbinPosition.replace(/\s+/g, '-')}`,
      { 'react-slds-no-hover-popup': !shouldShowOnHover },
    );
    return (
      <div className={menuClassName}>
        <ul className="slds-dropdown__list" role="menu">
          {menuItems}
        </ul>
      </div>
    );
  }
}

Menu.defaultProps = defaultProps;
Menu.propTypes = propTypes;

Menu.align = MENU_ALIGN;
Menu.nubbin = MENU_NUBBIN;

export default Menu;
