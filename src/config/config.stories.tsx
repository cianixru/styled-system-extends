import React from 'react';

import { styled } from '../';

import mdx from './config.mdx';

import type { Meta } from '@storybook/react';

export const Custom = () => {
  type BlockProps = {
    someProp: unknown;
    otherProp: unknown;
  };

  const config = styled.withConfig<BlockProps>({
    shouldForwardProp: prop => !Boolean(prop),
  });

  const Block = styled.tag('div', config);

  return <Block>Не отображается</Block>;
};

export const System = () => {
  const Block = styled.tag('div', styled.shouldForwardProp());

  return (
    <Block>
      Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
      necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non nostrum
      quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut nam, tempora
      similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nesciunt iusto
      eveniet sed consectetur magni quisquam sapiente voluptatum praesentium voluptates quis placeat
      pariatur veritatis mollitia molestias molestiae optio corporis? Sit?
    </Block>
  );
};

export default {
  title: 'Utils / styled / config',
  component: Custom,
  parameters: {
    docs: { page: mdx },
  },
} as Meta;
