import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

const MODAL_SIZES = ['regular', 'large'];

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /**
   * Size of the Modal
   * 
   * Regular - width: 50%; max-width: 40rem; min-width: 20rem;
   * Large - width: 90%;
   */
  containerStyle: PropTypes.object,
  isOpened: PropTypes.bool,
  onHide: PropTypes.func,
  size: PropTypes.oneOf(MODAL_SIZES),
};

const defaultProps = {
  containerStyle: {},
  isOpened: false,
  onHide: null,
  size: 'regular',
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
    const { className, isOpened, children, size, containerStyle, ...props } = this.props;
    delete props.onHide;
    const modalClassNames = classnames(className, 'slds-modal', {
      'slds-fade-in-open': isOpened,
      'slds-modal--large': size === 'large',
    });
    const backdropClassNames = classnames(className, 'slds-modal-backdrop', {
      'slds-modal-backdrop--open': isOpened,
    });
    return (
      <div>
        <div className={modalClassNames} aria-hidden={!isOpened} role="dialog" {...props}>
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

export default Modal;
