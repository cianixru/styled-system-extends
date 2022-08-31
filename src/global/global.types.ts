import type { StyledProps, StyleOptions } from '../styled.types';
import type { DefaultTheme, GlobalStyleComponent } from 'styled-components';

export type Global = <SO extends StyleOptions, P = StyledProps<SO>>(
  ...styles: SO[]
) => GlobalStyleComponent<P, DefaultTheme>;
