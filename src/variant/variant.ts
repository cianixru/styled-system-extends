/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any */

import { variant as systemVariant } from 'styled-system';

import { $variant } from './variant.types';

import type { Prop, Variant, Variants, VariantOptions, VariantStyles } from './variant.types';

export const getOption = (options: VariantOptions): VariantStyles | undefined => options[$variant];

export const hasOption = (options: object) => options.hasOwnProperty($variant);

const getVariant = (values: (Prop | Variants)[]) => {
  const entries = values.map(value =>
    typeof value === 'string' ? ['prop', value] : ['variants', value]
  );
  const variant = Object.fromEntries(entries);
  return systemVariant(variant);
};

export const variant: Variant = (...args: any[]) => {
  const variants = args[args.length - 1];
  const variant: VariantStyles = props => {
    args[args.length - 1] = variants(props);
    return getVariant(args);
  };

  return { [$variant]: variant };
};
