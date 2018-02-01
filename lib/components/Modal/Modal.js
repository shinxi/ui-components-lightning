import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

const MODAL_SIZES = ['regular', 'large'];

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(MODAL_SIZES),
  opened: PropTypes.bool,
  onHide: PropTypes.func,
  containerStyle: PropTypes.object,
  children: PropTypes.node,
};

const defaultProps = {
  size: 'regular',
  opened: false,
  onHide: null,
  containerStyle: {},
};

class Modal extends Component {
  hide = () => {
    if (this.props.onHide) {
      this.props.onHide();
    }
  };

  renderChildComponent = comp => {
    if (comp.type === ModalHeader) {
      return React.cloneElement(comp, { onClose: this.hide });
    }
    return comp;
  };

  render() {
    const { className, opened, children, size, containerStyle, ...props } = this.props;
    delete props.onHide;
    const modalClassNames = classnames(className, 'slds-modal', {
      'slds-fade-in-open': opened,
      'slds-modal--large': size === 'large',
    });
    const backdropClassNames = classnames(className, 'slds-modal-backdrop', {
      'slds-modal-backdrop--open': opened,
    });
    return (
      <div>
        <div className={modalClassNames} aria-hidden={!opened} role="dialog" {...props}>
          <div className="slds-modal__container" style={containerStyle}>
            {React.Children.map(children, this.renderChildComponent)}
          </div>
        </div>
        <div className={backdropClassNames} />
      </div>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

Modal.validSizes = MODAL_SIZES;
Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export { ModalHeader, ModalContent, ModalFooter };
export default Modal;
