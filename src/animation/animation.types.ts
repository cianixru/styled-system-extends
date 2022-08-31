import { css } from 'styled-components';

import type { Property } from 'csstype';
import type { CSSKeyframes as LibKeyframes } from 'styled-components';

export const $animation = Symbol('animation');

export type Animation = (keyframes: Keyframes, properties: Properties) => AnimationOptions;

type Keyframes = LibKeyframes;

export type AnimationOption = ReturnType<typeof css>;

export type AnimationOptions = {
  [$animation]?: AnimationOption;
};

type Properties = Property.Animation;

export type AnimationStyles = ReturnType<typeof css>;
