import type { CSSBase } from '../css.types';
import type { Typography, Variant } from './typography.types';
import type { SystemStyleObject } from '@styled-system/css';

const getTypography = (typography: Typography): Variant => {
  const variant = Array.isArray(typography)
    ? typography.map(t => t && `typography.${t}`)
    : `typography.${typography}`;

  return ['variant', variant];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isCSSObject = (value: any): boolean => !!value && typeof value === 'object';

export const normalize = (css: CSSBase): SystemStyleObject => {
  const entries = Object.entries(css).map(([key, value]) => {
    if (key === 'typography') {
      return getTypography(value);
    }

    if (isCSSObject(value)) {
      const val = Array.isArray(value)
        ? value.map(v => (isCSSObject(value) ? normalize(v) : v))
        : normalize(value);

      return [key, val];
    }

    return [key, value];
  });

  return Object.fromEntries(entries);
};
