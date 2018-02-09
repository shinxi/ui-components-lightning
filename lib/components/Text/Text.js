import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TEXT_CATEGORIES = ['body', 'heading', 'title'];
const TEXT_BODY_TYPES = ['regular', 'small', 'caps'];
const TEXT_HEADING_TYPES = ['large', 'medium', 'label'];
const TEXT_TYPES = ['small', ...TEXT_BODY_TYPES, ...TEXT_HEADING_TYPES];
const TEXT_ALIGNS = ['left', 'center', 'right'];

const propTypes = {
  /**
   * Alignment of the text
   */
  align: PropTypes.oneOf(TEXT_ALIGNS),
  /**
   * Text category
   */
  category: PropTypes.oneOf(TEXT_CATEGORIES),
  /**
   * Children of the text tag
   */
  children: PropTypes.node,
  /**
   * Classname to be added
   */
  className: PropTypes.string,
  /**
   * Classname for section title divider
   */
  section: PropTypes.bool,
  /**
   * Element to be added 
   */
  tag: PropTypes.string,
  /**
   * Classname for tuncate
   */
  truncate: PropTypes.bool,
  /**
   * Type of the text
   */
  type: PropTypes.oneOf(TEXT_TYPES),
};

const defaultProps = {
  category: 'body',
  className: '',
  tag: 'p',
  type: 'small',
};

const Text = ({
  tag,
  category,
  type,
  align,
  truncate,
  section,
  children,
  className,
  ...props
}) => {
  const textClassNames = classnames(
    {
      'slds-section-title--divider': section,
      [`slds-text-${category}--${type}`]: type && category,
      [`slds-text-${category}`]: category && !type,
      'slds-truncate': truncate,
      [`slds-text-align--${align}`]: align,
    },
    className,
  );
  const Tag = tag;
  const pprops = Object.assign({}, props);
  delete pprops.trancate;
  return (
    <Tag {...pprops} className={textClassNames}>
      {children}
    </Tag>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
export default Text;
