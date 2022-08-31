import type { BgGradient } from './bgGradient.types';
import type { Config } from 'styled-system';

export const prop: BgGradient['prop'] = 'bgGradient';

export const style: Config = {
  [prop]: {
    property: 'backgroundImage',
    scale: 'colors',
  },
};
