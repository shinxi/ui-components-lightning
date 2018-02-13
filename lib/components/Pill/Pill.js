import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from './../Icon';
import { Button } from './../Button';
import './Pill.scss';

const propTypes = {
  /**
   * Children will be used in place of the label, to allow customization
   */
  children: PropTypes.node,
  /**
   * ClassName to be added
   */
  className: PropTypes.string,
  /**
   * Icon to be added to the Pill, defined by category & icon
   */
  icon: PropTypes.shape({
    category: PropTypes.string,
    icon: PropTypes.string,
  }),
  /**
   * If the Pill is disabled, it will not allow the pill to be removed.
   */
  isDisabled: PropTypes.bool,
  /**
   * Should we truncate the string to fit within a fixed width pill?
   */
  isTruncated: PropTypes.bool,
  /**
   * Either define the label as a string, or use the children to customize it further
   */
  label: PropTypes.string,
  /**
   * Function to be called when the user clicks on the Pill itself.
   */
  onClick: PropTypes.func,
  /**
   * Function to be called when the user clicks on the Remove button.
   */
  onRemove: PropTypes.func,
  /**
   * Refrerence to the pill
   */
  pillRef: PropTypes.func,
  /**
   * Ability to override the tag of the pill, defaults to 'a'
   */
  tag: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: '',
  icon: null,
  isDisabled: false,
  isTruncated: false,
  label: '',
  onClick: null,
  onRemove: null,
  pillRef: null,
  tag: 'a',
};

class Pill extends Component {
  getTagName = () => {
    const tagName = this.props.isDisabled ? 'span' : this.props.tag;
    return tagName;
  }

  getLabel = () => {
    const label = this.props.children || this.props.label;
    return label;
  }

  // Keycodes: Backspsace (8) Delete (46)
  handleKeyDown(e) {
    if (e.keyCode === 8 || e.keyCode === 46) {
      e.preventDefault();
      e.stopPropagation();
      this.handlePillRemove({});
    }
  }

  handlePillClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  handlePillRemove(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.props.onRemove) {
      this.props.onRemove(e);
    }
  }

  render() {
    const { className, isDisabled, icon, pillRef, isTruncated } = this.props;
    const Tag = this.getTagName();
    const label = this.getLabel();
    const pillClassNames = classnames(
      'Pill',
      'slds-pill',
      {
        'Pill--truncated': isTruncated,
        'slds-truncate': isTruncated,
      },
      className,
    );
    return (
      <Tag
        ref={(node) => {
          if (pillRef) pillRef(node);
        }}
        className={pillClassNames}
        onKeyDown={this.handleKeyDown}
        onClick={this.handlePillClick}
      >
        { icon &&
          <Icon
            className="Pill__icon slds-pill__icon"
            category={icon.category}
            icon={icon.icon}
          />}
        <span className="Pill__label slds-pill__label">
          { label }
        </span>
        <Button
          disabled={isDisabled}
          className="Pill__remove slds-pill__remove"
          type="icon-bare"
          alt="Remove"
          tabIndex={-1}
          onClick={this.handlePillRemove}
        >
          <Icon className="Pill__remove-icon" icon="close" category="action" />
        </Button>
      </Tag>
    );
  }
}

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default Pill;
