import systemCss from '@styled-system/css';

import * as typography from './typography';

import type {
  CSS,
  CSSBase,
  CSSOptions,
  CSSSelector,
  CSSStyles,
  CSSStylesByProps,
  CSSStylesResult,
} from './css.types';

const getSystemCss = (css: CSSBase): CSSStylesResult => systemCss(typography.normalize(css));

const getCSSSelector = (selector: CSSSelector, css: CSSBase[]) => {
  const entries = css.map(css => Object.entries(css));
  const value = Object.fromEntries(([] as CSSBase[][]).concat(...entries));

  return selector ? { [selector.toString()]: value } : value;
};

export const css: CSS = (cssOrSelector: CSSBase | CSSSelector, ...css: CSSBase[]) =>
  css.length ? getCSSSelector(cssOrSelector as CSSSelector, css) : cssOrSelector;

export const getStyles = (css: CSSOptions): CSSStyles => {
  if (typeof css === 'function') {
    return (props => getSystemCss(css(props))) as CSSStylesByProps;
  }

  return getSystemCss(css);
};
