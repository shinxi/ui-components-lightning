import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from './../Icon';
import { Spinner } from './../Spinner';

const propTypes = {
  /**
   * Children of component
   */
  children: PropTypes.node,
  /**
   * Class names to be passed into component
   */
  className: PropTypes.string,
  /**
   * Callback function reference handleClick
   */
  handleClick: PropTypes.func,
  /**
   * Callback function reference handleLabelClick
   */
  handleLabelClick: PropTypes.func,
  /**
   * Callback function reference handleToggle
   */
  handleToggle: PropTypes.func,
  /**
   * Icon that needs to render before TreeItem
   */
  icon: PropTypes.string,
  /**
   * Is node item expanded
   */
  isOpened: PropTypes.bool,
  /**
   * Label for the node
   */
  label: PropTypes.string,
  /**
   * If its leaf node
   */
  leaf: PropTypes.bool,
  /**
   * Loading spinner, when data being loaded asynchronously
   */
  loading: PropTypes.bool,
  /**
   * Is node is selected
   */
  selected: PropTypes.bool,
};
const defaultProps = {
  children: [],
  className: '',
  handleClick: () => {},
  handleLabelClick: () => {},
  handleToggle: () => {},
  isOpened: false,
  label: '',
  leaf: false,
  loading: false,
  selected: false,
};

const TreeItem = props => {
  const {
    className,
    label,
    icon,
    loading,
    selected,
    leaf,
    isOpened,
    children,
    handleClick,
    handleLabelClick,
    handleToggle,
  } = props;
  const itemClassNames = classnames(className, 'Tree__item', 'slds-tree__item', {
    'slds-is-open': isOpened,
    'slds-is-selected': selected,
  });
  return (
    <div
      className={itemClassNames}
      onClick={e => handleClick(e)}
      role="button"
      tabIndex="0"
      style={{ position: 'relative' }}
    >
      {loading && (
        <Spinner
          container={false}
          size="small"
          className="slds-m-right--x-small"
          style={{ marginLeft: -2, marginTop: 14, position: 'static' }}
        />
      )}
      {!leaf && (
        <Icon
          category="utility"
          className="Icon__style"
          icon={icon}
          size="x-small"
          onClick={e => handleToggle(e)}
        />
      )}
      <a
        className="slds-truncate"
        tabIndex={-1}
        role="presentation"
        onClick={e => handleLabelClick(e)}
      >
        {label}
      </a>
      {leaf && children}
    </div>
  );
};

TreeItem.propTypes = propTypes;
TreeItem.defaultProps = defaultProps;

export default TreeItem;
