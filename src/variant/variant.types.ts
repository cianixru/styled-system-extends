/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars */

import { variant } from 'styled-system';

import type { VariantArgs as SystemVariant } from 'styled-system';

export const $variant = Symbol('variant');

export type DefaultVariantProp = 'variant';

export type InferVariantProps<O> = O extends VariantOptions<infer Props> ? Props : {};

export type Prop = Required<SystemVariant>['prop'];

export interface Variant {
  <
    P extends Prop,
    VP extends (props: Props) => V,
    Props = Parameters<VP>[0],
    V = ReturnType<VP>,
    K = keyof V
  >(
    propName: P,
    variantsByProps: VP
  ): VariantOptions<Record<P, K> & Props>;

  <VP extends (props: Props) => V, Props = Parameters<VP>[0], V = ReturnType<VP>, K = keyof V>(
    variantsByProps: VP
  ): VariantOptions<Record<DefaultVariantProp, K> & Props>;

  <P extends Prop, V extends Variants, K = keyof V>(propName: P, variants: V): VariantOptions<
    Record<P, K>
  >;

  <V extends Variants, K = keyof V>(variants: V): VariantOptions<Record<DefaultVariantProp, K>>;
}

export type Variants = Required<SystemVariant<StyledProps>>['variants'];

// Props необходим для последующего вычисления через InferProps
export type VariantOptions<Props extends VariantProps = {}> = {
  [$variant]?: VariantStyles;
};

type VariantProps = {
  [P in string]?: unknown;
};

export type VariantStyles = VariantStylesByProps;

type VariantStylesBase = ReturnType<typeof variant>;

type VariantStylesByProps = (props: Record<string, unknown>) => VariantStylesBase;
