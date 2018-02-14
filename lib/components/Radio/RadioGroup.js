import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  /**
   * Children of the RadioGroup React Radion
   */
  children: PropTypes.node,
  /**
   * Custom classname passed into the component
   */
  className: PropTypes.string,
  /**
   * cols size in number
   */
  cols: PropTypes.number,
  /**
   * unique name property to Radio option
   */
  name: PropTypes.string.isRequired,
  /**
   * totalcols size in number based on slds grid-system
   * Ref. https://www.lightningdesignsystem.com/utilities/sizing/
   */
  totalCols: PropTypes.number,
};

const defaultProps = {
  children: null,
  className: '',
  cols: 1,
  totalCols: 1,
};

class RadioGroup extends React.Component {
  renderRadio = radio => {
    if (React.isValidElement) {
      return React.cloneElement(radio, {
        name: this.props.name,
      });
    }
    return null;
  };

  render() {
    const { className, totalCols, cols, children, ...props } = this.props;
    const radioGroupClassNames = classnames(
      'Radio__group',
      className,
      'slds-form-element',
      typeof totalCols === 'number' ? `slds-size--${cols || 1}-of-${totalCols}` : null,
    );

    return (
      <fieldset className={radioGroupClassNames} {...props}>
        <div className="slds-form-element__control">
          {React.Children.map(children, this.renderRadio)}
        </div>
      </fieldset>
    );
  }
}

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;

export default RadioGroup;
