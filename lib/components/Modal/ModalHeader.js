import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button } from './../Button';
import Icon from './../Icon';

const propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  onClose: PropTypes.func,
  className: PropTypes.string,
  closeButton: PropTypes.bool,
};

const defaultProps = {
  title: '',
  tagline: '',
  onClose: null,
  closeButton: true,
};

class ModalHeader extends Component {
  onClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const { className, title, tagline, closeButton, ...props } = this.props;
    delete props.onClose;
    const hdClassNames = classnames(className, 'slds-modal__header');
    return (
      <div className={hdClassNames} {...props}>
        <h2 className="slds-text-heading--medium">{title}</h2>
        {tagline && <p className="slds-m-top--x-small">{tagline}</p>}
        {closeButton && (
          <Button
            type="icon-inverse"
            className="slds-modal__close"
            alt="Close"
            inverse
            onClick={this.onClose}
          >
            <Icon category="utility" icon="close" size="large" />
          </Button>
        )}
      </div>
    );
  }
}

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
