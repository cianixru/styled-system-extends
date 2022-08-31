import type { BoxShadow } from './boxShadow.types';
import type { Config } from 'styled-system';

export const prop: BoxShadow['prop'] = 'boxShadow';

export const style: Config = {
  [prop]: {
    property: 'boxShadow',
    scale: 'shadows',
  },
};
