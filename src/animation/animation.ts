import { css, keyframes as libKeyframes } from 'styled-components';

import { $animation } from './animation.types';

import type {
  Animation,
  AnimationOption,
  AnimationOptions,
  AnimationStyles,
} from './animation.types';

type AccStyle = AnimationOption | string;

export const animation: Animation = (keyframes, properties) => ({
  [$animation]: css`${libKeyframes(keyframes)} ${properties}`,
});

export const getOption = (options: AnimationOptions): AnimationOption | undefined =>
  options[$animation];

// eslint-disable-next-line @typescript-eslint/ban-types
export const hasOption = (options: object): boolean => options.hasOwnProperty($animation);

const stylesReducer = (
  styles: AccStyle[],
  option: AnimationOption,
  i: number,
  { length }: AnimationOption[]
): AccStyle[] => (i < length - 1 ? styles.concat(option, ' , ') : styles.concat(option));

export const getStyles = (options: AnimationOption[]): AnimationStyles => {
  const styles = options.reduce<AccStyle[]>(stylesReducer, []);

  return css`
    animation: ${styles};
  `;
};
