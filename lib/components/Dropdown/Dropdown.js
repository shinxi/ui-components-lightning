import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownItem from './DropdownItem';
import { Button } from './../Button';
import { registerStyle, isElInChildren } from './../utils';

const DROPDOWN_ALIGN = ['left', 'right'];
const DROPDOWN_SIZE = ['small', 'medium', 'large'];
const DROPDOWN_NUBBIN = [
  'top',
  'top left',
  'top right',
  'bottom',
  'bottom left',
  'bottom right',
  'auto',
];
const DROPDOWN_VERTICAL_ALIGN = ['top', 'bottom'];

const propTypes = {
  /**
   * Align for the DropDownItem
   */
  align: PropTypes.oneOf(DROPDOWN_ALIGN),
  /**
   * classname for the Dropdown
   */
  className: PropTypes.string,
  /**
   * Children provided to the List component
   */
  children: PropTypes.node,
  /**
   * What display should be used for the dropdown
   */
  display: PropTypes.string,
  /**
   * Eventhandler to close the List
   */
  handleListclose: PropTypes.func,
  /**
   * Eventhandler to handle the list item click
   */
  handleDropdownClick: PropTypes.func,
  /**
   * A boolean to say if the list shows up on hover
   */
  hoverPopup: PropTypes.bool,
  /**
   * The carat symbol on the top of the list of a dropdown
   */
  nubbin: PropTypes.oneOf(DROPDOWN_NUBBIN),
  /**
   * Eventhandler to handle the onBlur state of the List
   */
  onBlur: PropTypes.func,
  /**
   * Eventhandler to handle when user clicks on the dropdown
   */
  onClick: PropTypes.func,
  /**
   * Size of the List
   */
  size: PropTypes.oneOf(DROPDOWN_SIZE),
  /**
   * Options can be provided to the List too 
   */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  ),
  /**
   * Vertical Alignment of the List
   */
  vertAlign: PropTypes.oneOf(DROPDOWN_VERTICAL_ALIGN),
};

const defaultProps = {
  align: 'left',
  className: '',
  children: [],
  display: '',
  handleListclose: () => {},
  handleDropdownClick: () => {},
  hoverPopup: false,
  nubbin: '',
  onBlur: () => {},
  onClick: () => {},
  items: null,
  size: 'small',
  vertAlign: 'top',
};

class Dropdown extends Component {
  constructor(props) {
    super(props);
    const items = this.props.items;
    this.state = { opened: true, items };
    registerStyle('no-hover-popup', [
      [
        '.slds-dropdown-trigger:hover .slds-dropdown--menu.react-slds-no-hover-popup',
        '{ visibility: hidden; opacity: 0; }',
      ],
      [
        '.slds-dropdown-trigger.react-slds-dropdown-opened .slds-dropdown--menu',
        '{ visibility: visible !important; opacity: 1 !important; }',
      ],
    ]);
  }

  onBlur() {
    setTimeout(() => {
      if (!this.isFocusedInComponent()) {
        this.setState({ opened: false });
        if (this.props.onBlur) {
          this.props.onBlur();
        }
      }
    }, 10);
  }

  onKeyDown = e => {
    if (e.keyCode === 40) {
      // down
      e.preventDefault();
      e.stopPropagation();
      if (!this.state.opened) {
        this.setState({ opened: true });
        if (this.props.handleDropdownClick) {
          this.props.handleDropdownClick(e);
        }
        setTimeout(() => {
          this.focusToTargetItemEl();
        }, 20);
      } else {
        this.focusToTargetItemEl();
      }
    } else if (e.keyCode === 27) {
      // ESC
      e.preventDefault();
      e.stopPropagation();
      this.setState({ opened: false });
    }
  };

  getListItems = () => {
    let listItems = [];
    const { children, className, handleDropdownClick, display } = this.props;
    if (children.length > 0) {
      React.Children.map(children, child => {
        if (child.type !== Button) {
          listItems.push(
            React.cloneElement(child, {
              className: child.props.className || '',
              onClick: () => {
                this.setState({ opened: !this.state.opened });
                if (child.props.handleDropdownClick) {
                  child.props.handleDropdownClick();
                }
                handleDropdownClick();
              },
            }),
          );
        }
      });
    } else if (this.state.items) {
      const items = this.state.items;

      listItems = items.map((optionItem, index) => (
        <DropdownItem
          onclick={this.handleDropdownClick}
          handleListclose={this.handleListclose}
          value={optionItem.name}
          display={display}
          className={className}
          index={index}
        >
          {optionItem.name}
        </DropdownItem>
      ));
    }
    return listItems;
  };

  handleDropdownClick = () => {
    this.setState({ opened: true });
    if (this.props.handleDropdownClick) {
      this.props.handleDropdownClick();
    }
  };

  constructButtonPropsCustom = () => {
    let customButtonComponent = [];
    const { children } = this.props;
    if (children.length > 0) {
      React.Children.map(children, child => {
        if (child.type === Button) {
          customButtonComponent = React.cloneElement(child, {
            className: child.props.className || '',
          });
        }
      });
    }
    return customButtonComponent;
  };

  handleListclose = () => {
    this.trigger.focus();
    this.setState({ opened: false });
  };

  isFocusedInComponent = () => {
    const targetEl = document.activeElement;
    return (
      isElInChildren(this.node, targetEl) ||
      isElInChildren(this.dropdown, targetEl)
    );
  };

  render() {
    const {
      align,
      className,
      display,
      hoverPopup,
      size,
      vertAlign,
    } = this.props;

    const dropdownClassNames = classNames(className, 'slds-dropdown-trigger', {
      'react-slds-dropdown-opened': this.state.opened,
    });

    const nubbin = this.props.nubbin;
    const nubbinPosition = nubbin === 'auto' ? `${vertAlign} ${align}` : nubbin;
    const dropdownItemClass = classNames(
      className,
      'slds-dropdown',
      `slds-dropdown--${align}`,
      `slds-dropdown--${vertAlign}`,
      size ? `slds-dropdown--${size}` : undefined,
      nubbinPosition
        ? `slds-nubbin_${nubbinPosition.replace(/\s+/g, '-')}`
        : undefined,
      { 'react-slds-no-hover-popup': !hoverPopup },
    );
    const listItems = this.getListItems();
    return (
      <div className={dropdownClassNames}>
        {this.props.children.length > 0 ? (
          this.constructButtonPropsCustom()
        ) : (
          <Button
            type="neutral"
            onClick={this.onDropdownClick}
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur}
          >
            {display}
          </Button>
        )}
        {this.state.opened ? (
          <div className={dropdownItemClass}>
            <ul className="slds-dropdown__list" role="menu">
              {listItems}
            </ul>
          </div>
        ) : (
          undefined
        )}
      </div>
    );
  }
}

Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;

export default Dropdown;
