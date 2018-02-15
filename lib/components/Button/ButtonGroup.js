import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children components for the ButtonGroup
   */
  children: PropTypes.node,
  /**
   * className that will be used for styling the wrapper div and its children for ButtonGroup
   */
  className: PropTypes.string,
};

const defaultProps = {
  children: [],
  className: '',
};

const ButtonGroup = (props) => {
  const { className, children, ...restProps } = props;
  const btnGrpClassNames = classnames(
    'Button__group',
    className,
    'slds-button-group',
  );
  return (
    <div className={btnGrpClassNames} role="group" {...restProps}>
      {children}
    </div>
  );
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
