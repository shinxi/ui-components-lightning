import React from 'react';
// TODO: UI-771 This API will be changed to createPortal after React 16
// eslint-disable-next-line camelcase
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import PopoverHeader from './PopoverHeader';
import PopoverBody from './PopoverBody';
import { getCoords, uuid } from '../utils';
import './Popover.scss';

const ARROW_OFFSET = 15; // Gap between trigger and popover content

const POPOVER_POSITIONS = [
  'bottom',
  'bottom-left',
  'bottom-right',
  'left',
  'left-top',
  'left-bottom',
  'right',
  'right-top',
  'right-bottom',
  'top',
  'top-left',
  'top-right',
];

const POPOVER_METHODS = ['click', 'hover'];

const POPOVER_THEMES = ['none', 'info', 'success', 'warning', 'error'];

const propTypes = {
  children: PropTypes.node,
  /**
   * Header in popover content
   */
  header: PropTypes.string,
  /**
   * Body in popover content
   */
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Developer customized id for popover portal
   */
  portalId: PropTypes.string,
  /**
   * Dark background color and dynamic width for default theme
   */
  isTooltip: PropTypes.bool,
  /**
   * Popover trggier methods
   */
  method: PropTypes.oneOf(POPOVER_METHODS),
  /**
   * Arrow position for popover content
   */
  position: PropTypes.oneOf(POPOVER_POSITIONS),
  /**
   * Background color for popover content
   */
  theme: PropTypes.oneOf(POPOVER_THEMES),
};

const defaultProps = {
  header: null,
  body: null,
  isTooltip: false,
  method: 'click',
  portalId: '',
  position: 'bottom',
  theme: 'none',
};

class Popover extends React.Component {
  state = {
    isVisible: false,
  };

  componentDidMount() {
    const { portalId = `Popover__portal_${this.defaultId}` } = this.props;
    if (!document.getElementById(portalId)) {
      this.portalEl.classList.add('Popover__portal');
      this.portalEl.setAttribute('id', portalId);
      document.body.appendChild(this.portalEl);
    } else {
      this.portalEl = document.getElementById(portalId);
    }

    this.renderPortal(this.props);

    this.onResize = () => {
      this.renderPortal(this.props);
    };
    window.addEventListener('resize', this.onResize);

    this.onMouseClick = event => {
      if (this.state.isVisible && this.triggerEl && this.triggerEl.childNodes[0] !== event.target) {
        this.setState({ isVisible: false }, () => {
          this.renderPortal(this.props);
        });
      }
    };
    window.addEventListener('click', this.onMouseClick);
  }

  componentWillReceiveProps(nextProps) {
    if (this.triggerEl) {
      this.renderPortal(nextProps);
    }
  }

  componentWillUnmount() {
    this.portalEl.parentNode.removeChild(this.portalEl);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('click', this.onMouseClick);
  }

  onClickTrigger = () => {
    if (this.props.method === 'click') {
      this.setState(
        prevState => ({ isVisible: !prevState.isVisible }),
        () => {
          this.renderPortal(this.props);
        },
      );
    }
  };

  onHoverTrigger = () => {
    if (this.props.method === 'hover' && !this.state.isVisible) {
      this.setState({ isVisible: true }, () => {
        this.renderPortal(this.props);
      });
    }
  };

  onBlurTrigger = () => {
    if (this.props.method === 'hover' && this.state.isVisible) {
      this.setState({ isVisible: false }, () => {
        this.renderPortal(this.props);
      });
    }
  };

  getContentStyle = position => {
    if (!this.contentEl || !this.triggerEl) return {};
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
  };

  defaultId = uuid();

  portalEl = document.createElement('div');

  renderPortal = props => {
    const { position, theme, isTooltip, header, body } = props;
    const style = this.getContentStyle(position);
    const popoverClassNames = classnames('Popover__content', 'slds-popover', {
      Popover__hide: !this.state.isVisible,
      'slds-popover--tooltip': isTooltip,
      [`slds-nubbin--${position}`]: position,
      [`slds-theme--${theme}`]: theme,
    });

    unstable_renderSubtreeIntoContainer(
      this,
      <div ref={el => (this.contentEl = el)} className={popoverClassNames} style={style}>
        {header && <PopoverHeader>{header}</PopoverHeader>}
        <PopoverBody>{body}</PopoverBody>
      </div>,
      this.portalEl,
    );
  };

  render() {
    const { children, position, theme, isTooltip, header, body, ...props } = this.props;
    delete props.defaultVisible;
    return (
      <div className="Popover" {...props}>
        <div
          ref={el => (this.triggerEl = el)}
          className="Popover__trigger"
          role="button"
          tabIndex="0"
          onClick={this.onClickTrigger}
          onMouseOver={this.onHoverTrigger}
          onMouseOut={this.onBlurTrigger}
        >
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
