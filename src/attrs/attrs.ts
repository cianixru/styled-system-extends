/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any */

import { $attrs } from './attrs.types';

import type { Attrs, AttrsOption, AttrsOptions } from './attrs.types';

export const attrs: Attrs = (attrs: any) => ({
  [$attrs]: attrs,
});

export const getOption = (options: AttrsOptions): AttrsOption => options[$attrs];

export const hasOption = (options: object): boolean => options.hasOwnProperty($attrs);
