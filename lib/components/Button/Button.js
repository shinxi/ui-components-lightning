import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Spinner } from './../Spinner';
import { Icon } from './../Icon';

const BUTTON_SIZES = ['x-small', 'small', 'medium', 'large'];

const BUTTON_TYPES = [
  'neutral',
  'brand',
  'destructive',
  'inverse',
  'icon-bare',
  'icon-container',
  'icon-inverse',
  'icon-more',
  'icon-border',
  'icon-border-filled',
];

const propTypes = {
  /**
   * Alignment for the Button
   */
  align: PropTypes.string,
  alt: PropTypes.string,
  buttonRef: PropTypes.func,
  /**
   * Contents of the Button can be label or children, In case of Icon pass in the Icon
   */
  children: PropTypes.node,
  className: PropTypes.string,
  htmlType: PropTypes.string,
  label: PropTypes.node,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  /**
   * Whether the button is selected or not 
   */
  selected: PropTypes.bool,
  /**
   * Size of the Button
   */
  size: PropTypes.oneOf(BUTTON_SIZES),
  /**
   * Type of the Button
   */
  type: PropTypes.oneOf(BUTTON_TYPES),
};

const defaultProps = {
  /**
   * Defaults align to left
   */
  align: 'left',
  /**
   * Defaults children to empty
   */
  children: [],
  /**
   * Defaults size to x-small
   */
  size: 'x-small',
  /**
   * Defaults type to brand
   */
  type: 'brand',
};

class Button extends Component {
  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
    this.node.focus();
  }

  constructButtonIconProps = (child) => {
    if (child.type !== Icon) { return child; }
    const ICON_ALIGNS = ['left', 'right'];

    const alignClassName = ICON_ALIGNS.indexOf(child.props.align) >= 0 ? `slds-button__icon--${child.props.align}` : null;
    const sizeClassName = BUTTON_SIZES.indexOf(child.props.size) >= 0 ? `slds-button__icon--${child.props.size}` : null;
    const inverseClassName = child.props.inverse ? 'slds-button__icon--inverse' : null;
    const iconClassNames = classnames('slds-button__icon', alignClassName, sizeClassName,
      inverseClassName, child.props.className);
    const iconStyle = { ...child.props.style, pointerEvents: 'none' };
    const icon = child.props.icon;

    return React.cloneElement(child, {
      className: `${iconClassNames}`,
      icon: `${icon}`,
      textColor: null,
      style: { iconStyle },
    });
  }


  render() {
    const {
      className, type, size, selected, alt, align, label, loading,
      htmlType = 'button', children, buttonRef, onClick, ...props
    } = this.props;
    delete props.inverse;
    const typeClassName = type ? `slds-button--${type}` : null;
    const btnClassNames = classnames(
      className,
      'slds-button',
      typeClassName,
      {
        'slds-is-selected': selected,
        [`slds-button--${size}`]: size && !/^icon-/.test(type),
        [`slds-button--icon-${size}`]: /^(x-small|small)$/.test(size) && /^icon-/.test(type),
      },
    );

    return (
      <button
        ref={(node) => {
          this.node = node;
          if (buttonRef) buttonRef(node);
        }}
        className={btnClassNames}
        type={htmlType}
        {...props}
        onClick={this.onClick}
      >
        {children && React.Children.map(children, this.constructButtonIconProps)}
        {label || null}
        {alt && <span className="slds-assistive-text">{alt}</span>}
        {loading && <Spinner />}
      </button>
    );
  }
}
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
