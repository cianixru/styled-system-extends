/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars */

import type { BgGradient } from './bgGradient';
import type { BoxShadow } from './boxShadow';
import type { Gap } from './gap';
import type {
  NonSystemStyleFunction,
  NonSystemStyleProps,
  NonSystemStylesMap,
  styleFn,
  SystemStyleFunction,
  SystemStyleProps as LibStyleProps,
  SystemStylesMap as LibStylesMap,
} from 'styled-system';

export const $system = Symbol('system');

export type InferSystemProps<O> = O extends SystemOptions<infer Props> ? Props : {};

export type System = <S extends SystemStyleProp, P = Pick<SystemStyleProps, SystemStylesMap[S]>>(
  ...styleProps: S[]
) => SystemOptions<P>;

export type SystemOption = styleFn[];

// Props необходим для последующего вычисления через InferProps
export type SystemOptions<Props extends SystemProps = {}> = {
  [$system]?: SystemOption;
};

type SystemProps = {
  [P in string]?: unknown;
};

export type SystemStyleProp =
  | NonSystemStyleFunction
  | SystemStyleFunction
  | BgGradient['prop']
  | BoxShadow['prop']
  | Gap['prop'];

type SystemStyleProps = NonSystemStyleProps &
  LibStyleProps &
  BgGradient['props'] &
  BoxShadow['props'] &
  Gap['props'];

type SystemStylesMap = NonSystemStylesMap &
  LibStylesMap &
  BgGradient['map'] &
  BoxShadow['map'] &
  Gap['map'];

export type SystemStyles = styleFn;
