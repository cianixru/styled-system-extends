import styledComponents from 'styled-components';

import {
  getOption as getAnimation,
  hasOption as hasAnimation,
  getStyles as getAnimationStyles,
} from './animation';
import { getOption as getAttrs, hasOption as hasAttrs } from './attrs';
import { getOption as getConfig, hasOption as hasConfig } from './config';
import { getStyles as getCSS } from './css';
import {
  getOption as getSystem,
  hasOption as hasSystem,
  getStyles as getSystemStyles,
} from './system';
import { getOption as getVariant, hasOption as hasVariant } from './variant';

import type { AnimationOptions } from './animation';
import type { AttrsOptions } from './attrs';
import type { ConfigOptions } from './config';
import type { CSSOptions } from './css';
import type { Component, Options, StyleOptions, Styles } from './styled.types';
import type { SystemOptions } from './system';
import type { VariantOptions } from './variant';

const optionsReducer = (options: Options, styleOptions: StyleOptions): Options => {
  if (hasAnimation(styleOptions)) {
    const animation = getAnimation(styleOptions as AnimationOptions);
    animation && options.animations.push(animation);
    return options;
  }

  if (hasAttrs(styleOptions)) {
    options.attrs = getAttrs(styleOptions as AttrsOptions);
    return options;
  }

  if (hasConfig(styleOptions)) {
    options.config = getConfig(styleOptions as ConfigOptions);
    return options;
  }

  if (hasSystem(styleOptions)) {
    const system = getSystem(styleOptions as SystemOptions);
    options.system = options.system.concat(system);
    return options;
  }

  if (hasVariant(styleOptions)) {
    const variant = getVariant(styleOptions as VariantOptions);
    variant && options.styles.push(variant);
  } else {
    const css = getCSS(styleOptions as CSSOptions);
    options.styles.push(css);
  }

  return options;
};

export const getOptions = (groupStyles: StyleOptions[]) =>
  groupStyles.reduce<Options>(optionsReducer, {
    animations: [],
    attrs: undefined,
    config: undefined,
    styles: [],
    system: [],
  });

export const getStyledComponent = <C extends Component>(
  Component: C,
  { attrs, config }: Options
) => {
  let StyledComponent = styledComponents(Component);

  if (config) {
    StyledComponent = StyledComponent.withConfig(config);
  }

  return attrs ? StyledComponent.attrs(attrs) : StyledComponent;
};

export const getStyledProps = ({ animations, styles, system }: Options): Styles[] => {
  const styledProps: Styles[] = [];

  animations.length && styledProps.push(getAnimationStyles(animations));
  system.length && styledProps.push(getSystemStyles(system));

  return styledProps.concat(styles);
};
