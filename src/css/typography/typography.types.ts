import type { VariantProperty } from '@styled-system/css';
import type { ResponsiveValue, SystemTheme, ThemeValue } from 'styled-system';

type ThemeTypography = ThemeValue<'typography', SystemTheme>;

export type Typography = ResponsiveValue<ThemeTypography, SystemTheme> | undefined;

export type TypographyProps = {
  typography?: ResponsiveValue<ThemeTypography, SystemTheme> | undefined;
};

export type Variant = [VariantKey, VariantTypography];

type VariantKey = keyof VariantProperty;

type VariantTypography = ResponsiveValue<string, SystemTheme> | undefined;
