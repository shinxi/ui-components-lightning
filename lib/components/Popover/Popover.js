import React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PopoverBody from './PopoverBody';
import { getCoords } from '../utils';
import './Popover.scss';

const ARROW_OFFSET = 15; // Gap between trigger and popover content

const POPOVER_POSITIONS = [
  'top',
  'top-left',
  'top-right',
  'bottom',
  'bottom-left',
  'bottom-right',
  'left',
  'left-top',
  'left-bottom',
  'right',
  'right-top',
  'right-bottom',
];

const POPOVER_THEMES = ['info', 'success', 'warning', 'error'];

const propTypes = {
  children: PropTypes.node,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  defaultVisible: PropTypes.bool,
  hover: PropTypes.bool,
  position: PropTypes.oneOf(POPOVER_POSITIONS),
  theme: PropTypes.oneOf(POPOVER_THEMES),
  tooltip: PropTypes.bool,
};

const defaultProps = {
  defaultVisible: false,
};

class Popover extends React.Component {
  state = {
    isVisible: this.props.defaultVisible,
  };

  componentDidMount() {
    if (!document.querySelector('.Popover__portal')) {
      this.portalEl.classList.add('Popover__portal');
      document.body.appendChild(this.portalEl);
    } else {
      this.portalEl = document.querySelector('.Popover__portal');
    }
    this.renderPortal(this.props);
    window.addEventListener('resize', () => {
      this.renderPortal(this.props);
    });
  }

  componentWillReceiveProps(nextProps) {
    this.renderPortal(nextProps);
  }

  componentWillUnmount() {
    this.portalEl.parentNode.removeChild(this.portalEl);
  }

  onClickTrigger = () => {
    this.setState(state => ({ isVisible: !state.isVisible }), () => {
      this.renderPortal(this.props);
    });
  };

  getContentStyle = (position) => {
    if (!this.contentEl) return {};
    const triggerWidth = this.triggerEl.offsetWidth;
    const contentWidth = this.contentEl.offsetWidth;
    const triggerHeight = this.triggerEl.offsetHeight;
    const contentHeight = this.contentEl.offsetHeight;
    const triggerPos = getCoords(this.triggerEl);
    switch (position) {
      case 'bottom':
        return {
          left: `${triggerPos.left - contentWidth / 2 + triggerWidth / 2}px`,
          top: `${triggerPos.top - contentHeight - ARROW_OFFSET}px`,
        };
      case 'bottom-left':
        return {
          left: `${triggerPos.left}px`,
          top: `${triggerPos.top - contentHeight - ARROW_OFFSET}px`,
        };
      case 'bottom-right':
        return {
          left: `${triggerPos.left - contentWidth + triggerWidth}px`,
          top: `${triggerPos.top - contentHeight - ARROW_OFFSET}px`,
        };
      case 'left':
        return {
          left: `${triggerPos.left + triggerWidth + ARROW_OFFSET}px`,
          top: `${triggerPos.top - contentHeight / 2 + triggerHeight / 2}px`,
        };
      case 'left-bottom':
        return {
          left: `${triggerPos.left + triggerWidth + ARROW_OFFSET}px`,
          top: `${triggerPos.top - contentHeight + triggerHeight}px`,
        };
      case 'left-top':
        return {
          left: `${triggerPos.left + triggerWidth + ARROW_OFFSET}px`,
          top: `${triggerPos.top}px`,
        };
      case 'right':
        return {
          left: `${triggerPos.left - contentWidth - ARROW_OFFSET}px`,
          top: `${triggerPos.top - contentHeight / 2 + triggerHeight / 2}px`,
        };
      case 'right-bottom':
        return {
          left: `${triggerPos.left - contentWidth - ARROW_OFFSET}px`,
          top: `${triggerPos.top - contentHeight + triggerHeight}px`,
        };
      case 'right-top':
        return {
          left: `${triggerPos.left - contentWidth - ARROW_OFFSET}px`,
          top: `${triggerPos.top}px`,
        };
      case 'top':
        return {
          left: `${triggerPos.left - contentWidth / 2 + triggerWidth / 2}px`,
          top: `${triggerPos.top + triggerHeight + ARROW_OFFSET}px`,
        };
      case 'top-left':
        return {
          left: `${triggerPos.left}px`,
          top: `${triggerPos.top + triggerHeight + ARROW_OFFSET}px`,
        };
      case 'top-right':
        return {
          left: `${triggerPos.left - contentWidth + triggerWidth}px`,
          top: `${triggerPos.top + triggerHeight + ARROW_OFFSET}px`,
        };
      default:
        return {};
    }
  }

  portalEl = document.createElement('div');

  renderPortal = (props) => {
    const { position, theme, tooltip, content } = props;
    const style = this.getContentStyle(position);
    const popoverClassNames = classnames(
      'Popover__content',
      'slds-popover',
      {
        Popover__hide: !this.state.isVisible,
        'slds-popover--tooltip': tooltip,
        [`slds-nubbin--${position}`]: position,
        [`slds-theme--${theme}`]: theme,
      },
    );

    unstable_renderSubtreeIntoContainer(
      this,
      <div ref={(el) => this.contentEl = el} className={popoverClassNames} style={style}>
        {content}
      </div>,
      this.portalEl);
  }

  render() {
    const { children, position, theme, tooltip, content, ...props } = this.props;
    delete props.defaultVisible;
    return (
      <div className="Popover" {...props}>
        <div ref={(el) => this.triggerEl = el} className="Popover__trigger" role="button" tabIndex="0" onClick={this.onClickTrigger}>
          {children}
        </div>
      </div>
    );
  }
}

Popover.validPositions = POPOVER_POSITIONS;
Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
