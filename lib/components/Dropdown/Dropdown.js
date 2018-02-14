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
};

const defaultProps = {
  children: [],
  className: '',
  display: '',
  items: null,
  onBlur: () => {},
  onClick: () => {},
  onKeyDown: () => {},
};

class Dropdown extends Component {
  constructor(props) {
    super(props);
    const items = this.props.items;
    this.state = { items, opened: true };
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
        if (this.props.onClick) {
          this.props.onClick(e);
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

  onClick = () => {
    this.setState({ opened: true });
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  constructButtonPropsCustom = () => {
    let customButtonComponent = [];
    const { children } = this.props;
    if (children.length) {
      React.Children.map(children, child => {
        if (child.type === Button) {
          customButtonComponent = React.cloneElement(child, {
            className: child.props.className,
          });
        }
      });
    }
    return customButtonComponent;
  };

  render() {
    const { children, className, display, ...props } = this.props;

    const items = this.props.items;
    const dropdownClassNames = classnames(
      'Dropdown',
      className,
      'slds-dropdown-trigger',
      {
        'react-slds-dropdown-opened': this.state.opened,
      },
    );
    return (
      <div className={dropdownClassNames}>
        {this.props.children.length ? (
          this.constructButtonPropsCustom()
        ) : (
          <Button
            type="neutral"
            onClick={this.onClick}
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur}
          >
            {display}
          </Button>
        )}
        {this.state.opened && (
          <Menu items={items} {...props}>
            {children}
          </Menu>
        )}
      </div>
    );
  }
}

Dropdown.defaultProps = defaultProps;
Dropdown.propTypes = propTypes;

export default Dropdown;
