import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListItem from './ListItem';

const LIST_ALIGN = ['left', 'right'];
const LIST_VERTICAL_ALIGN = ['top', 'bottom'];
const LIST_SIZE = ['small', 'medium', 'large'];
const LIST_NUBBIN = ['top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right', 'auto'];

const propTypes = {
  /**
   * Alignment of the List
   */
  align: PropTypes.oneOf(LIST_ALIGN),
  /**
   * classname for the List
   */
  className: PropTypes.string,
  /**
   * Children provided to the List component
   */
  children: PropTypes.node,
  /**
   * Eventhandler to close the List
   */
  handleListclose: PropTypes.func,
  /**
   * Eventhandler to handle the list item click
   */
  handleListItemclick: PropTypes.func,
  /**
   * A boolean to say if the list shows up on hover
   */
  isFloating: PropTypes.bool,
  /**
   * The carat symbol on the top of the list of a dropdown
   */
  nubbin: PropTypes.oneOf(LIST_NUBBIN),
  /**
   * Eventhandler to handle the onBlur state of the List
   */
  onBlur: PropTypes.func,
  /**
   * Eventhandler to hnadle the onFocus of the List
   */
  onFocus: PropTypes.func,
  /**
   * Options can be provided to the List too 
   */
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})])),
  /**
   * Size of the List
   */
  size: PropTypes.oneOf(LIST_SIZE),
  /**
   * Vertical Alignment of the List
   */
  vertAlign: PropTypes.oneOf(LIST_VERTICAL_ALIGN),


};

const defaultProps = {
  align: 'left',
  className: '',
  children: [],
  handleListclose: () => {},
  handleListItemclick: () => {},
  isFloating: 'false',
  nubbin: 'bottom',
  onBlur: () => {},
  onFocus: () => {},
  options: null,
  size: 'small',
  vertAlign: 'top',
};

class List extends Component {
  constructor(props) {
    super(props);

    const options = props.options;
    this.state = { options };
  }

  getListItems = () => {
    let listItems = [];
    const { children, handleListItemClick } = this.props;

    if (children) {
      React.Children.map(children, (child, index) => React.cloneElement(child, {
        className: child.props.className || '',
        onClick: event => {
          if (child.props.onClick) {
            child.props.onClick();
          }
          handleListItemClick();
        },
      }));
    } else if (this.state.options) {
      const options = this.state.options;
      listItems = options.map((optionItem, index) => (
        <ListItem />
      ));
    }

    return listItems;
  }

  render() {
    const {
      align, className, isFloating, nubbin, onBlur, onFocus, size, vertAlign,
    } = this.props;
    const nubbinPosition = nubbin === 'auto' ? `${vertAlign} ${align}` : nubbin;
    const listClassNames = classnames(
      className,
      'slds-dropdown',
      `slds-dropdown--${align}`,
      `slds-dropdown--${vertAlign}`,
      size ? `slds-dropdown--${size}` : undefined,
      nubbinPosition
        ? `slds-nubbin_${nubbinPosition.replace(/\s+/g, '-')}`
        : undefined,
      { 'react-slds-no-hover-popup': !isFloating },
    );

    const listItems = this.getListItems();

    return (
      <div
        role="listitem"
        className={listClassNames}
      >
        <ul className="slds-dropdown__list">
          { listItems }
        </ul>
      </div>
    );
  }
}

List.defaultProps = defaultProps;
List.propTypes = propTypes;
export default List;
