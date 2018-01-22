import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Spinner from './../Spinner';

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
  alt: PropTypes.string,
  buttonRef: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  htmlType: PropTypes.string,
  label: PropTypes.node,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  size: PropTypes.oneOf(BUTTON_SIZES),
  type: PropTypes.oneOf(BUTTON_TYPES),
};
class Button extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    if (this.props.onClick) {
      this.props.onClick.call(event);
    }
    this.node.focus();
  } 

  render() {
    const {
      className, type, size, selected, alt, label, loading,
      htmlType = 'button', children, buttonRef, ...props
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
        { ...props }
        onClick={this.onClick}
      >
        {children || label}
        {alt ? <span className='slds-assistive-text'>{alt}</span> : null}
        {loading ? <Spinner /> : null}
      </button>
    );
  }
}
Button.propTypes = propTypes;

export default Button;
