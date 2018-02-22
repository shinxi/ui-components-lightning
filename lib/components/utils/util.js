import createUUID from 'uuid';
import { updateScroll } from 'react-relative-portal';

export const uuid =
  process.env.NODE_ENV === 'test' ?
    () => '$uuid$' :
    createUUID;

export const getToday =
  process.env.NODE_ENV === 'test' ?
    () => '2017-02-23' :
    () => new Date().toISOString().substring(0, 10);

let assetRoot = '/assets';

export function setAssetRoot(path) {
  assetRoot = path;
}

export function getAssetRoot() {
  return assetRoot;
}

export function registerStyle(styleName, rules) {
  const styleId = `react-slds-cssfix-${styleName}`;
  let style = document.getElementById(styleId);
  if (style) { return; }
  style = document.createElement('style');
  style.id = styleId;
  style.appendChild(document.createTextNode(''));
  document.documentElement.appendChild(style);
  rules.forEach(ruleSet => {
    const declaration = ruleSet.pop();
    let selectors = ruleSet;
    selectors = selectors.concat(selectors.map(s => `.slds ${s}`));
    const rule = `${selectors.join(', ')} ${declaration}`;
    style.sheet.insertRule(rule, 0);
  });
}

export function isElInChildren(rootEl, targetEl) {
  /* eslint-disable no-param-reassign */
  while (targetEl && targetEl !== rootEl) {
    targetEl = targetEl.parentNode;
  }

  return !!targetEl;
}

export function offset(el) {
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft,
  };
}

export function cleanProps(props, propTypes) {
  const newProps = props;
  Object.keys(propTypes).forEach((key) => {
    delete newProps[key];
  });
  return newProps;
}

/**
 * Utility function for propType validation of specific components.
 * @param {object} props 
 * @param {string} propName 
 * @param {string} componentName 
 * @param {node|array} Component 
 */
export function validatePropComponent(props, propName, componentName, Component) {
  const prop = props[propName];
  const components = Array.isArray(Component) ? Component : [Component];
  components.forEach((component) => {
    if (prop.type !== component) {
      return new Error(
        `${componentName} should only have children of type "${Component.name}"`,
      );
    }
    return true;
  });
  return true;
}

/**
 * Utility function for get Dom element's position related to the page
 * @param {DOMElement} elem 
 */
export function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;

  return { left: Math.round(left), top: Math.round(top) };
}
