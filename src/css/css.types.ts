/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars */

import type { StyledBase } from '../styled.types';
import type { TypographyProps } from './typography';
import type { CssFunctionReturnType, CSSProperties } from '@styled-system/css';
import type { Pseudos } from 'csstype';
import type { SystemStyleProp, SystemStyleProps } from 'styled-system';

export interface CSS extends CSSSelectorComponent, CSSSelectorPseudos, CSSSelectorBase {
  (css: CSSBase): CSSBase;
}

export type CSSSelector = StyledBase | Pseudos | string;

interface CSSSelectorComponent {
  <C extends StyledBase>(component: C, ...css: CSSBase[]): CSSBase;
}

interface CSSSelectorPseudos {
  <P extends Pseudos>(pseudos: P, ...css: CSSBase[]): CSSBase;
}

interface CSSSelectorBase {
  <S extends string>(selector: S, ...css: CSSBase[]): CSSBase;
}

export type CSSBase = Omit<CSSProperties, SystemStyleProp | keyof TypographyProps> & CSSProps;

type CSSByProps<Props extends CSSOptionsProps> = (props: Props) => CSSBase;

export type CSSProps = SystemStyleProps & TypographyProps;

export type CSSOptions<Props extends CSSOptionsProps = {}> = CSSBase | CSSByProps<Props>;

type CSSOptionsProps = {
  [P in string]?: unknown;
};

export type CSSStyles = CSSStylesResult | CSSStylesByProps;

export type CSSStylesByProps = (props: Record<string, unknown>) => CSSStylesResult;

export type CSSStylesResult = CssFunctionReturnType;

export type InferCSSProps<O> = O extends CSSByProps<infer Props> ? Props : {};
