import React from 'react';

import { styled } from '../';

import mdx from './animation.mdx';

import type { Meta } from '@storybook/react';

export const Single = () => {
  const fadeIn = styled.animation(
    {
      '0%': {
        opacity: 0,
      },
      '50%': {
        opacity: 1,
      },
      '100%': {
        opacity: 0,
      },
    },
    '1s ease-out infinite'
  );

  const Block = styled.tag('div', fadeIn);

  return <Block>Мигание текста</Block>;
};

export const Multiple = () => {
  const fadeIn = styled.animation(
    {
      '0%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
    '1s ease-out infinite'
  );

  const rotate = styled.animation(
    {
      from: {
        transform: 'rotateX(0deg)',
      },
      to: {
        transform: 'rotateX(360deg)',
      },
    },
    '10s linear infinite'
  );

  const Block = styled.tag('div', fadeIn, rotate);

  return <Block>Мигание и вращение текста</Block>;
};

export default {
  title: 'Utils / styled / animation',
  component: Single,
  parameters: {
    docs: { page: mdx },
  },
} as Meta;
