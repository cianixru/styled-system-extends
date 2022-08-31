import { compose } from 'styled-system';

import { getStyle, systemStyles } from './system.helpers';
import { $system } from './system.types';

import type {
  System,
  SystemOption,
  SystemOptions,
  SystemStyleProp,
  SystemStyles,
} from './system.types';
import type { DisabledProp } from 'styled-system';

const disabledProps: DisabledProp[] = [
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'letterSpacing',
  'lineHeight',
];

export const getOption = (options: SystemOptions): SystemOption => options[$system] || [];

// eslint-disable-next-line @typescript-eslint/ban-types
export const hasOption = (options: object) => options.hasOwnProperty($system);

export const getStyles = (option: SystemOption): SystemStyles => compose(...option);

export const system: System = (...styleProps) => {
  const styles: SystemStyleProp[] = styleProps.length ? styleProps : systemStyles;

  return {
    [$system]: styles.filter(prop => !disabledProps.includes(prop as DisabledProp)).map(getStyle),
  };
};
