import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validatePropComponent from '../utils';

import GridRow from './GridRow';

const propTypes = {
  className: PropTypes.string,
  children: (props, name, cName) => validatePropComponent(props, name, cName, GridRow),
  frame: PropTypes.bool,
  tag: PropTypes.string,
  vertical: PropTypes.bool,
};

const defaultProps = {
  className: '',
  children: null,
  frame: false,
  tag: 'div',
  vertical: true,
};

const Grid = ({
  className,
  children,
  frame,
  tag,
  vertical,
  ...props
}) => {
  const gridClassNames = classnames(
    className, 'slds-grid',
    frame ? 'slds-grid--frame' : null,
    vertical ? 'slds-grid--vertical' : null,
  );
  const Tag = tag;
  return (
    <Tag className={gridClassNames} {...props}>
      { children }
    </Tag>
  );
};


Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
