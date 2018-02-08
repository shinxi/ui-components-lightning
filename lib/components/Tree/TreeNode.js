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
  leaf: PropTypes.bool,
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
   * Function callback toggleOnNodeClick
   */
  toggleOnNodeClick: PropTypes.func,
};

const defaultProps = {
  children: [],
  leaf: false,
  level: 1,
  onClick: () => {},
  onLabelClick: () => {},
  onNodeClick: () => {},
  onNodeLabelClick: () => {},
  onNodeToggle: () => {},
  onToggle: () => {},
  opened: false,
  selected: false,
  toggleOnNodeClick: () => {},
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
      onToggle(e, this.props);
    }
    if (onNodeToggle) {
      onNodeToggle(e, this.props);
    }
    this.setState(prevState => ({
      icon: !prevState.opened ? 'chevrondown' : 'chevronright',
      opened: !prevState.opened,
    }));
  };

  handleLabelClick = e => {
    const { onLabelClick, onNodeLabelClick } = this.props;
    if (onLabelClick) {
      onLabelClick(e, this.props);
    }
    if (onNodeLabelClick) {
      onNodeLabelClick(e, this.props);
    }
  };

  handleClick = e => {
    const { onClick, onNodeClick, toggleOnNodeClick } = this.props;
    if (onClick) {
      onClick(e, this.props);
    }
    if (onNodeClick) {
      onNodeClick(e, this.props);
    }
    if (toggleOnNodeClick) {
      this.onToggle(e);
    }
  };

  renderChildNode = (level, tnode) => {
    const { onNodeClick, onNodeToggle, onNodeLabelClick, toggleOnNodeClick } = this.props;
    return cloneElement(tnode, {
      level,
      onNodeClick,
      onNodeLabelClick,
      onNodeToggle,
      toggleOnNodeClick,
    });
  };

  render() {
    const { leaf, level, selected, children, ...props } = this.props;
    const defaultIcon = selected ? 'chevrondown' : 'chevronright';
    const { opened: isOpened, icon = defaultIcon } = this.state;
    const nodeClassNames = classnames('Tree__node', 'slds-tree__group', {
      'is-expanded': isOpened,
      'slds-hide': !isOpened,
      'slds-nested': !leaf,
      'slds-show': isOpened,
    });
    const itemProps = { children, icon, isOpened, leaf, selected, ...props };
    const actionProps = {
      handleClick: this.handleClick,
      handleLabelClick: this.handleLabelClick,
      handleToggle: this.handleToggle,
    };
    if (leaf) {
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
