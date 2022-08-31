import React from 'react';

import { styled } from '../';

import mdx from './global.mdx';

import type { Meta } from '@storybook/react';

export const Example = () => {
  const GlobalStyle = styled.global({
    body: {
      border: '10px solid',
      borderColor: 'dune',
    },
  });

  return <GlobalStyle />;
};

export default {
  title: 'Utils / styled / global',
  component: Example,
  parameters: {
    docs: { page: mdx },
  },
} as Meta;
