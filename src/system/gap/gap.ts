import type { Gap } from './gap.types';
import type { Config } from 'styled-system';

export const prop: Gap['prop'] = 'gap';

export const style: Config = {
  [prop]: {
    property: 'gap',
    scale: 'space',
  },
};
