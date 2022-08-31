/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars */

import type { Attrs as LibAttrs } from 'styled-components';

export const $attrs = Symbol('attrs');

export type $Attrs = typeof $attrs;

export interface Attrs {
  <A extends Attributes>(attrs: A): AttrsOptions<{}>;

  <AP extends (props: P) => A, P = Parameters<AP>[0], A extends Attributes = ReturnType<AP>>(
    attrsByProps: AP
  ): AttrsOptions<P>;
}

type Attributes = Record<string, unknown>;

type AttrsByProps<Props extends AttrsProps = {}> = Exclude<
  LibAttrs<Props, Partial<Props>>,
  Partial<Props>
>;

export type AttrsOption = AttrsByProps | undefined;

// Props необходим для последующего вычисления через InferProps
export type AttrsOptions<Props extends AttrsProps = {}> = {
  [$attrs]?: AttrsOption;
};

type AttrsProps = {
  [P in string]?: unknown;
};

export type InferAttrsProps<O> = O extends AttrsOptions<infer Props> ? Props : {};
