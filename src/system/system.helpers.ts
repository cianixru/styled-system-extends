import * as styledSystem from 'styled-system';

import * as bgGradient from './bgGradient';
import * as boxShadow from './boxShadow';
import * as gap from './gap';

import type { SystemStyleProp } from './system.types';
import type { NonSystemStyleFunction, SystemStyleFunction } from 'styled-system';

export const systemStyles: SystemStyleFunction[] = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'background',
  'backgroundColor',
  'backgroundImage',
  'backgroundSize',
  'backgroundPosition',
  'backgroundRepeat',
  'border',
  'borderBottom',
  'borderColor',
  'borderLeft',
  'borderRadius',
  'borderRight',
  'borderStyle',
  'borderTop',
  'borderWidth',
  'bottom',
  'color',
  'display',
  'flex',
  'flexBasis',
  'flexbox',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'grid',
  'gridArea',
  'gridAutoColumns',
  'gridAutoFlow',
  'gridAutoRows',
  'gridColumn',
  'gridColumnGap',
  'gridGap',
  'gridRow',
  'gridRowGap',
  'gridTemplateAreas',
  'gridTemplateColumns',
  'gridTemplateRows',
  'height',
  'justifyContent',
  'justifyItems',
  'justifySelf',
  'layout',
  'left',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'opacity',
  'order',
  'overflow',
  'padding',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'position',
  'right',
  'space',
  'size',
  'textAlign',
  'textColor',
  'textShadow',
  'top',
  'verticalAlign',
  'width',
  'zIndex',
];

const getCustomStyle = (prop: NonSystemStyleFunction) =>
  styledSystem.style({ prop, cssProperty: prop });

export const getStyle = (styleProp: SystemStyleProp) => {
  if (styleProp === bgGradient.prop) {
    return styledSystem.system(bgGradient.style);
  }

  if (styleProp === boxShadow.prop) {
    return styledSystem.system(boxShadow.style);
  }

  if (styleProp === gap.prop) {
    return styledSystem.system(gap.style);
  }

  if (systemStyles.includes(styleProp as SystemStyleFunction)) {
    return styledSystem[styleProp as SystemStyleFunction];
  }

  return getCustomStyle(styleProp as NonSystemStyleFunction);
};
