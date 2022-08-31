import { createGlobalStyle } from 'styled-components';

import { getOptions } from '../styled.helpers';

import type { Global } from './global.types';

export const global: Global = (...styles) => {
  const options = getOptions(styles);

  return options.styles.length ? createGlobalStyle` ${options.styles} ` : createGlobalStyle``;
};
