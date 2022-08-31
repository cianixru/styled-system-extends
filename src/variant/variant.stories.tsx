import React from 'react';

import { styled } from '../';

import mdx from './variant.mdx';

import type { Meta } from '@storybook/react';

export const DefaultPropNameWithoutProps = () => {
  const variant = styled.variant({
    primary: { color: 'mangoTango' },
    secondary: { color: 'turbo' },
  });

  const Block = styled.tag('div', variant);

  return (
    <>
      <Block variant='primary'>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non nostrum
        quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut nam,
        tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        nesciunt iusto eveniet sed consectetur magni quisquam sapiente voluptatum praesentium
        voluptates quis placeat pariatur veritatis mollitia molestias molestiae optio corporis? Sit?
      </Block>
      <hr />
      <Block variant='secondary'>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non nostrum
        quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut nam,
        tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        nesciunt iusto eveniet sed consectetur magni quisquam sapiente voluptatum praesentium
        voluptates quis placeat pariatur veritatis mollitia molestias molestiae optio corporis? Sit?
      </Block>
    </>
  );
};

export const DefaultPropNameWithProps = () => {
  type VariantProps = {
    isRight?: boolean;
  };

  const variant = styled.variant(({ isRight }: VariantProps) => {
    const textAlign = isRight ? 'right' : 'left';
    return {
      primary: { textAlign, color: 'mangoTango' },
      secondary: { textAlign, color: 'turbo' },
    };
  });

  const Block = styled.tag('div', variant);

  return (
    <>
      <Block variant='primary'>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </Block>
      <hr />
      <Block variant='primary' isRight>
        Aspernatur velit, officiis non nostrum quis, error excepturi beatae odio sed explicabo et
        minus id quaerat fugit amet ut nam, tempora similique. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Laboriosam, nesciunt iusto eveniet sed consectetur magni
        quisquam sapiente voluptatum praesentium voluptates quis placeat pariatur veritatis mollitia
        molestias molestiae optio corporis? Sit?
      </Block>
      <hr />
      <Block variant='secondary'>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </Block>
      <hr />
      <Block variant='secondary' isRight>
        Aspernatur velit, officiis non nostrum quis, error excepturi beatae odio sed explicabo et
        minus id quaerat fugit amet ut nam, tempora similique. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Laboriosam, nesciunt iusto eveniet sed consectetur magni
        quisquam sapiente voluptatum praesentium voluptates quis placeat pariatur veritatis mollitia
        molestias molestiae optio corporis? Sit?
      </Block>
    </>
  );
};

export const CustomPropNameWithoutProps = () => {
  const variant = styled.variant('custom', {
    primary: { color: 'mangoTango' },
    secondary: { color: 'turbo' },
  });

  const Block = styled.tag('div', variant);

  return (
    <>
      <Block custom='primary'>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non nostrum
        quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut nam,
        tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        nesciunt iusto eveniet sed consectetur magni quisquam sapiente voluptatum praesentium
        voluptates quis placeat pariatur veritatis mollitia molestias molestiae optio corporis? Sit?
      </Block>
      <hr />
      <Block custom='secondary'>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non nostrum
        quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut nam,
        tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        nesciunt iusto eveniet sed consectetur magni quisquam sapiente voluptatum praesentium
        voluptates quis placeat pariatur veritatis mollitia molestias molestiae optio corporis? Sit?
      </Block>
    </>
  );
};

export const CustomPropNameWithProps = () => {
  type VariantProps = {
    isRight?: boolean;
  };

  const variant = styled.variant('custom', ({ isRight }: VariantProps) => {
    const textAlign = isRight ? 'right' : 'left';
    return {
      primary: { textAlign, color: 'mangoTango' },
      secondary: { textAlign, color: 'turbo' },
    };
  });

  const Block = styled.tag('div', variant);

  return (
    <>
      <Block custom='primary'>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </Block>
      <hr />
      <Block custom='primary' isRight>
        Aspernatur velit, officiis non nostrum quis, error excepturi beatae odio sed explicabo et
        minus id quaerat fugit amet ut nam, tempora similique. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Laboriosam, nesciunt iusto eveniet sed consectetur magni
        quisquam sapiente voluptatum praesentium voluptates quis placeat pariatur veritatis mollitia
        molestias molestiae optio corporis? Sit?
      </Block>
      <hr />
      <Block custom='secondary'>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus. Lorem
        ipsum dolor sit amet consectetur adipisicing elit.
      </Block>
      <hr />
      <Block custom='secondary' isRight>
        Aspernatur velit, officiis non nostrum quis, error excepturi beatae odio sed explicabo et
        minus id quaerat fugit amet ut nam, tempora similique. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Laboriosam, nesciunt iusto eveniet sed consectetur magni
        quisquam sapiente voluptatum praesentium voluptates quis placeat pariatur veritatis mollitia
        molestias molestiae optio corporis? Sit?
      </Block>
    </>
  );
};

export default {
  title: 'Utils / styled / variant',
  component: DefaultPropNameWithoutProps,
  parameters: {
    docs: { page: mdx },
  },
} as Meta;
