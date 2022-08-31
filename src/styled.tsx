import { animation } from './animation';
import { attrs } from './attrs';
import { shouldForwardProp, withConfig } from './config';
import { css } from './css';
import { global } from './global';
import { protect } from './protect';
import { getOptions, getStyledComponent, getStyledProps } from './styled.helpers';
import { system } from './system';
import { variant } from './variant';

import type { Styled } from './styled.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const styled: Styled = (Component: any, ...styles: any[]) => {
  const options = getOptions(styles);
  const styledProps = getStyledProps(options);
  const StyledComponent = getStyledComponent(Component, options);

  return styledProps.length ? StyledComponent` ${styledProps} ` : StyledComponent``;
};

styled.tag = styled;

styled.animation = animation;

styled.attrs = attrs;

styled.css = css;

styled.global = global;

styled.protect = protect;

styled.shouldForwardProp = shouldForwardProp;

styled.system = system;

styled.variant = variant;

styled.withConfig = withConfig;
