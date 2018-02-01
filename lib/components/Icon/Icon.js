import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import svg4everybody from 'svg4everybody';
import { registerStyle, getAssetRoot } from './../utils';
import IconColor from './IconColor';
import STANDARD_ICONS from './IconStandard';
import CUSTOM_ICONS from './IconCustom';
import ACTION_ICONS from './IconAction';
import DOCTYPE_ICONS from './IconDoctype';
import UTILITY_ICONS from './IconUtility';

svg4everybody();

const contextTypes = {
  assetRoot: PropTypes.string,
};

const icons = {
  standard: STANDARD_ICONS,
  custom: CUSTOM_ICONS,
  action: ACTION_ICONS,
  doctype: DOCTYPE_ICONS,
  utility: UTILITY_ICONS,
};

const VALID_CATEGORIES = ['action', 'custom', 'doctype', 'standard', 'utility'];

const iconSize = ['x-small', 'small', 'medium', 'large'];

const propTypes = {
  /**
   * Alignment of the icon
   */
  align: PropTypes.string,
  /**
   * Category of Icons Available
   */
  category: PropTypes.oneOf(VALID_CATEGORIES),
  /**
   * ClassName to be added
   */
  className: PropTypes.string,
  /**
   * Color of the Icon
   */
  color: PropTypes.string,
  /**
   * The color to fill the Icon
   */
  fillColor: PropTypes.string,
  /**
   * The name of the Icon
   */
  icon: PropTypes.string,
  /**
   * The size of the icon
   */
  size: PropTypes.oneOf(iconSize),
  /**
   * A number to set the order in which an element receives tab focus. 
   */
  tabIndex: PropTypes.number,
  /**
   * If there is text inside of the icon , the type determines the color like warning or error etc.
   */
  textColor: PropTypes.oneOf(['default', 'warning', 'error']),
};

const defaultProps = {
  align: 'left',
  category: 'standard',
  className: '',
  color: '#ccc',
  size: 'small',
  tabIndex: 2,
  textColor: 'default',
};
class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    registerStyle('icon', [
      [
        '.slds-icon use',
        '{ pointer-events: none; }',
      ],
    ]);
  }

  componentDidMount() {
    this.checkIconColor();
    const svgEl = this.svgIcon;
    if (svgEl) {
      svgEl.setAttribute('focusable', this.props.tabIndex >= 0);
    }
  }

  componentDidUpdate() {
    this.checkIconColor();
  }

  checkIconColor() {
    const { fillColor, category = 'utility' } = this.props;
    const { iconColor } = this.state;
    if (fillColor || category === 'doctype' ||
      (!fillColor && category === 'utility') ||
      iconColor === 'standard-default') {
      return;
    }
    const el = this.svgIcon;
    if (!el) { return; }
    const bgColorStyle = getComputedStyle(el)['background-color'];
    // if no background color set to the icon
    if (/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/.test(bgColorStyle)) {
      this.setState({ iconColor: 'standard-default' });
    }
  }

  renderSVG({
    className, category = 'utility', icon, size, align, fillColor,
    textColor = 'default', style, assetRoot, ...props
  }) {
    const iconColor = IconColor(fillColor, category, icon);
    const iconClassNames = classnames(
      {
        'slds-icon': !/slds\-button__icon/.test(className),
        [`slds-icon--${size}`]: /^(x-small|small|medium|large)$/.test(size),
        [`slds-icon-text-${textColor}`]: /^(default|warning|error)$/.test(textColor) && !iconColor,
        [`slds-icon-${iconColor}`]: iconColor,
        'slds-m-left--x-small': align === 'right',
        'slds-m-right--x-small': align === 'left',
      },
      className,
    );

    // icon and category prop should not include chars other than alphanumerics, underscore, and hyphen
    icon = (icon || '').replace(/[^\w\-]/g, ''); // eslint-disable-line no-param-reassign
    category = (category || '').replace(/[^\w\-]/g, ''); // eslint-disable-line no-param-reassign

    const iconUrl = `${assetRoot}/icons/${category}-sprite/svg/symbols.svg#${icon}`;
    return (
      <svg
        className={iconClassNames}
        aria-hidden
        ref={node => (this.svgIcon = node)}
        style={style}
        {...props}
      >
        <use xlinkHref={iconUrl} />
      </svg>
    );
  }

  render() {
    const { ...props } = this.props;
    const { assetRoot = getAssetRoot() } = this.context;
    let { category, icon } = props;

    if (!icons[category]) {
      return new Error('Category entered does not exist');
    }
    if (icon.indexOf(':') > 0) {
      [category, icon] = icon.split(':');
    }
    return this.renderSVG({ ...props, category, icon, assetRoot });
  }
}


Icon.contextTypes = contextTypes;
Icon.icons = icons;
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.validCategories = VALID_CATEGORIES;


export default Icon;
