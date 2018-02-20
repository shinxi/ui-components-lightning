import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TreeItem from './TreeItem';

const propTypes = {
  /**
   * Children of component
   */
  children: PropTypes.node,
  /**
   * Icon that needs to render before TreeItem
   */
  icon: PropTypes.string,
  /**
   * If its leaf node
   */
  isLeaf: PropTypes.bool,
  /**
   * Define level
   */
  level: PropTypes.number,
  /**
   * Function callback onClick
   */
  onClick: PropTypes.func,
  /**
   * Function callback onLabelClick
   */
  onLabelClick: PropTypes.func,
  /**
   * Function callback onNodeClick
   */
  onNodeClick: PropTypes.func,
  /**
   * Function callbacl onNodeLabelClick
   */
  onNodeLabelClick: PropTypes.func,
  /**
   * Function callbacl onNodeToggle
   */
  onNodeToggle: PropTypes.func,
  /**
   * Function callback onToggle
   */
  onToggle: PropTypes.func,
  /**
   * Functional callback onToggle
   */
  opened: PropTypes.bool,
  /**
   * Is node is selected
   */
  selected: PropTypes.bool,
  /**
   * Will it Toggle OnNodeClick
   */
  willToggleOnNodeClick: PropTypes.bool,
};

const defaultProps = {
  children: [],
  isLeaf: false,
  level: 1,
  onClick: null,
  onLabelClick: null,
  onNodeClick: null,
  onNodeLabelClick: null,
  onNodeToggle: null,
  onToggle: null,
  opened: false,
  selected: false,
  willToggleOnNodeClick: false,
};

class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: props.icon,
      opened: props.opened,
    };
    this.renderChildNode = this.renderChildNode.bind(this, props.level + 1);
  }

  handleToggle = e => {
    const { onToggle, onNodeToggle } = this.props;
    if (onToggle) {
      onToggle(e);
    }
    if (onNodeToggle) {
      onNodeToggle(e);
    }
    this.setState(prevState => ({
      icon: !prevState.opened ? 'chevrondown' : 'chevronright',
      opened: !prevState.opened,
    }));
  };

  handleLabelClick = e => {
    const { onLabelClick, onNodeLabelClick } = this.props;
    if (onLabelClick) {
      onLabelClick(e);
    }
    if (onNodeLabelClick) {
      onNodeLabelClick(e);
    }
  };

  handleClick = e => {
    const { onClick, onNodeClick, willToggleOnNodeClick } = this.props;
    if (onClick) {
      onClick(e);
    }
    if (onNodeClick) {
      onNodeClick(e);
    }
    if (willToggleOnNodeClick) {
      this.onToggle(e);
    }
  };

  renderChildNode = (level, tnode) => {
    const { onNodeClick, onNodeToggle, onNodeLabelClick, willToggleOnNodeClick } = this.props;
    return cloneElement(tnode, {
      level,
      onNodeClick,
      onNodeLabelClick,
      onNodeToggle,
      willToggleOnNodeClick,
    });
  };

  render() {
    const { isLeaf, level, selected, children, ...props } = this.props;
    const defaultIcon = selected ? 'chevrondown' : 'chevronright';
    const { opened: isOpened, icon = defaultIcon } = this.state;
    const nodeClassNames = classnames('Tree__node', 'slds-tree__group', {
      'is-expanded': isOpened,
      'slds-hide': !isOpened,
      'slds-nested': !isLeaf,
      'slds-show': isOpened,
    });
    const itemProps = { children, icon, isLeaf, isOpened, selected, ...props };
    const actionProps = {
      handleClick: this.handleClick,
      handleLabelClick: this.handleLabelClick,
      handleToggle: this.handleToggle,
    };
    if (isLeaf) {
      return (
        <li role="treeitem" aria-level={level}>
          <TreeItem {...actionProps} {...itemProps} />
        </li>
      );
    }

    return (
      <li role="treeitem" aria-level={level} aria-expanded={isOpened}>
        <TreeItem {...actionProps} {...itemProps} />
        <ul className={nodeClassNames} role="group">
          {Children.map(children, this.renderChildNode)}
        </ul>
      </li>
    );
  }
}

TreeNode.propTypes = propTypes;
TreeNode.defaultProps = defaultProps;

export default TreeNode;
