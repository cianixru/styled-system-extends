import React from 'react';

import mdx from './styled.mdx';

import { styled } from './';

import type { Meta } from '@storybook/react';

export const Native = () => {
  const Block = styled.tag('div');

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

export const Component = () => {
  const Block = styled.tag('div');
  const Text: React.FC = props => <span {...props} />;
  const StyledBlock = styled(Block);
  const StyledText = styled(Text);

  return (
    <StyledBlock>
      <StyledText>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate!
      </StyledText>
      <StyledText>Odio laudantium illum temporibus.</StyledText>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non
        nostrum quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut
        nam, tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        nesciunt iusto eveniet sed consectetur magni quisquam sapiente voluptatum praesentium
        voluptates quis placeat pariatur veritatis mollitia molestias molestiae optio corporis? Sit?
      </StyledText>
    </StyledBlock>
  );
};

export default {
  title: 'Utils / styled / about',
  component: Component,
  parameters: {
    docs: { page: mdx },
  },
} as Meta;
