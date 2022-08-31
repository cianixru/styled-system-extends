import React from 'react';

import { styled } from '../';

import mdx from './protect.mdx';

import type { Meta } from '@storybook/react';

export const ReactComponent = () => {
  type ComponentProps = React.HTMLAttributes<HTMLDivElement>;
  const Component: React.FC<ComponentProps> = props => (
    <div style={{ border: '10px solid gray' }} {...props} />
  );
  const ProtectedComponent = styled.protect(Component);
  const Block = styled(ProtectedComponent, { bg: 'mangoTango' });

  return (
    <Block style={{ border: '100px solid red' }}>
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

export const StyledComponent = () => {
  const StyledComponent = styled.tag('div', { bg: 'mangoTango' });
  const ProtectedStyledComponent = styled.protect(StyledComponent);
  const Block = styled(ProtectedStyledComponent, { bg: 'turbo' });

  return (
    <Block style={{ border: '10px solid red' }}>
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
  title: 'Utils / styled / protect',
  component: ReactComponent,
  parameters: {
    docs: { page: mdx },
  },
} as Meta;
