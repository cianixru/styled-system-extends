/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types */

import type { Animation, AnimationOption, AnimationOptions, AnimationStyles } from './animation';
import type { Attrs, AttrsOption, AttrsOptions, InferAttrsProps } from './attrs';
import type { ConfigOption, ConfigOptions, ShouldForwardProp, WithConfig } from './config';
import type { CSS, CSSBase, CSSOptions, CSSStyles, InferCSSProps } from './css';
import type { Global } from './global';
import type { Protect } from './protect';
import type { InferSystemProps, System, SystemOption, SystemOptions, SystemStyles } from './system';
import type { InferVariantProps, Variant, VariantOptions, VariantStyles } from './variant';
import type { CustomComponent as LibComponent, ComponentType, Native } from 'react';
import type { CustomStyledComponent } from 'styled-components';

export type Component = LibComponent;

type DefaultProps<T = any> = {
  [P in string]?: T;
};

type InferInnerComponent<C extends StyledComponent> = C extends StyledComponent<infer Inner, any>
  ? Inner
  : C;

type InferInnerComponentProps<C extends StyledComponent> = C extends StyledComponent<any, infer P>
  ? P
  : {};

type InferStylesProps<SO extends StyleOptionsWithProps> = SO extends AttrsOptions<any>
  ? InferAttrsProps<SO>
  : SO extends SystemOptions<any>
  ? InferSystemProps<SO>
  : SO extends VariantOptions<any>
  ? InferVariantProps<SO>
  : SO extends CSSOptions<any>
  ? InferCSSProps<SO>
  : never;

export type Options = {
  animations: AnimationOption[];
  attrs: AttrsOption;
  config: ConfigOption;
  styles: (CSSStyles | VariantStyles)[];
  system: SystemOption;
};

type StyledTag = <C extends Native, SO extends StyleOptions, P = StyledProps<SO>>(
  Component: C,
  ...styles: SO[]
) => StyledNative<C, P>;

export interface Styled {
  <C extends ComponentType, SO extends StyleOptions, P = StyledProps<SO>>(
    Component: C,
    ...styles: SO[]
  ): StyledReactComponent<C, P>;

  <C extends StyledComponent, SO extends StyleOptions, P = StyledProps<SO>>(
    Component: C,
    ...styles: SO[]
  ): StyledStyledComponent<C, P>;

  tag: StyledTag;

  animation: Animation;
  attrs: Attrs;
  css: CSS;
  global: Global;
  protect: Protect;
  system: System;
  shouldForwardProp: ShouldForwardProp;
  variant: Variant;
  withConfig: WithConfig;
}

export type StyledProps<
  SO extends StyleOptions,
  SOP extends StyleOptionsWithProps = Exclude<SO, StyleOptionsWithoutProps | CSSBase>,
  P = false
> = P extends DefaultProps ? P : UnionToIntersection<InferStylesProps<SOP>>;

export type StyledBase<
  C extends Component = Component,
  Props extends DefaultProps = {}
> = CustomStyledComponent<C, Props>;

type StyledComponent<C extends Component = Component, Props extends DefaultProps = {}> = StyledBase<
  C,
  Props
>;

type StyledReactComponent<
  Component extends ComponentType,
  Props extends DefaultProps = {}
> = StyledBase<Component, Props>;

type StyledNative<Component extends Native, Props extends DefaultProps = {}> = StyledBase<
  Component,
  Props
>;

type StyledStyledComponent<
  C extends StyledComponent,
  Props extends DefaultProps = {},
  InnerComponent extends Component = InferInnerComponent<C>,
  InnerComponentProps extends DefaultProps = InferInnerComponentProps<C>
> = StyledBase<InnerComponent, InnerComponentProps & Props>;

export type StyleOptions = StyleOptionsWithoutProps | StyleOptionsWithProps;

type StyleOptionsWithProps =
  | AttrsOptions<any>
  | CSSOptions<any>
  | SystemOptions<any>
  | VariantOptions<any>;

type StyleOptionsWithoutProps = AnimationOptions | ConfigOptions<any>;

export type Styles = AnimationStyles | CSSStyles | SystemStyles | VariantStyles;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never;
