import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from './../Button';
import { Menu } from './../Menu';
import './Dropdown.scss';

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
   * Display for the button Dropdown
   */
  display: PropTypes.string,
  /**
   * Options can be provided to the List too 
   */
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  ),
  /**
   * Eventhandler to handle the onBlur state of the List
   */
  onBlur: PropTypes.func,
  /**
   * Eventhandler to handle when user clicks on the dropdown
   */
  onClick: PropTypes.func,
  /**
   * Eventhandler to handle the onKeyDown state of the List
   */
  onKeyDown: PropTypes.func,
  /**
   * Passing the Menu Item click to the children
   */
  onMenuItemClick: PropTypes.func,
  /**
   * A boolean to say if the list shows up on hover
   */
  shouldShowOnHover: PropTypes.bool,
};

const defaultProps = {
  children: [],
  className: '',
  display: '',
  items: null,
  onBlur: null,
  onClick: null,
  onKeyDown: null,
  onMenuItemClick: null,
  shouldShowOnHover: false,
};

class Dropdown extends Component {
  constructor(props) {
    super(props);
    const { items } = props;
    this.state = {
      isOpened: false,
      items,
    };
  }


  getMenuItems = () => {
    let menuItems = [];
    const { children, onMenuItemClick, ...props } = this.props;
    if (children.length) {
      React.Children.map(children, child => {
        if (child.type !== Button) {
          menuItems.push(
            React.cloneElement(child, {
              className: child.props.className,
              onMenuItemClick,
            }),
          );
        }
      });
    } else if (this.state.items) {
      menuItems = (
        <Menu items={this.state.items} {...props}>
          {children}
        </Menu>
      );
    }
    return menuItems;
  };

  handleKeyDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const { onClick } = this.props;
    if (e.keyCode === 40) {
      // down
      if (!this.state.isOpened) {
        this.setState({ isOpened: true });
        if (onClick) {
          onClick(e);
        }
        setTimeout(() => {
          this.focusToTargetItemEl();
        }, 20);
      } else {
        this.focusToTargetItemEl();
      }
    } else if (e.keyCode === 27) {
      // ESC
      this.setState({ isOpened: false });
    }
  };

  handleOnClick = () => {
    const { onClick, shouldShowOnHover } = this.props;
    if (!shouldShowOnHover) {
      this.setState({ isOpened: true });
    }
    if (onClick) {
      onClick();
    }
  };

  handleBlur = () => {
    setTimeout(() => {
      if (!this.isFocusedInComponent()) {
        this.setState({ isOpened: false });
        if (this.props.onBlur) {
          this.props.onBlur();
        }
      }
    }, 10);
  };

  constructButtonPropsCustom = () => {
    let customButtonComponent = [];
    const { children } = this.props;
    if (children.length) {
      React.Children.map(children, child => {
        if (child.type === Button) {
          customButtonComponent = React.cloneElement(child, {
            className: child.props.className,
            onClick: () => {
              if (child.props.onClick) {
                child.props.onClick();
              }
              this.handleOnClick();
            },
          });
        }
      });
    }
    return customButtonComponent;
  };

  render() {
    const { className, display, shouldShowOnHover } = this.props;
    const menuItems = this.getMenuItems();
    const dropdownClassNames = classnames(
      'Dropdown',
      className,
      'slds-dropdown-trigger',
      {
        'react-slds-dropdown-opened': this.state.isOpened,
      },
    );
    return (
      <div className={dropdownClassNames}>
        {this.props.children.length ? (
          this.constructButtonPropsCustom()
        ) : (
          <Button
            type="neutral"
            onClick={this.handleOnClick}
            onKeyDown={this.handleKeyDown}
            onBlur={this.handleBlur}
          >
            {display}
          </Button>
        )}
        {(this.state.isOpened || shouldShowOnHover) && menuItems}
      </div>
    );
  }
}

Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;

export default Dropdown;
