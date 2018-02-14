import React, { Component, Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { cleanProps } from './../utils';
import './Tree.scss';

const propTypes = {
  /**
   * Children of component
   */
  children: PropTypes.node.isRequired,
  /**
   * Class names to be passed into component
   */
  className: PropTypes.string,
  /**
   * Label for the node
   */
  label: PropTypes.string,
  /**
   * Function that is called on click of Node
   */
  onNodeClick: PropTypes.func,
  /**
   * Function that is called on click of Node Label
   */
  onNodeLabelClick: PropTypes.func,
  /**
   * Function that is called on toggle of Node
   */
  onNodeToggle: PropTypes.func,
  /**
   * Will it Toggle OnNodeClick
   */
  willToggleOnNodeClick: PropTypes.bool,
};
const defaultProps = {
  children: [],
  className: '',
  label: '',
  onNodeClick: null,
  onNodeLabelClick: null,
  onNodeToggle: null,
  willToggleOnNodeClick: false,
};

class Tree extends Component {
  renderTreeNode = tnode => {
    const { onNodeClick, onNodeToggle, onNodeLabelClick, willToggleOnNodeClick } = this.props;
    return cloneElement(tnode, {
      level: 1,
      onNodeClick,
      onNodeLabelClick,
      onNodeToggle,
      willToggleOnNodeClick,
    });
  };

  render() {
    const { className, label, children, ...props } = this.props;
    const treeClassNames = classnames(className, 'Tree', 'slds-tree-container');
    const pprops = cleanProps(props, Tree.propTypes);
    return (
      <div className={treeClassNames} role="application" {...pprops}>
        {label && <h4 className="slds-text-heading--label">{label}</h4>}
        <ul className="slds-tree" role="tree">
          {Children.map(children, this.renderTreeNode)}
        </ul>
      </div>
    );
  }
}

Tree.propTypes = propTypes;
Tree.propTypes = defaultProps;

export default Tree;
