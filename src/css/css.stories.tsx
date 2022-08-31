import React from 'react';

import { styled } from '../';

import mdx from './css.mdx';

import type { CSS } from '../';
import type { Meta } from '@storybook/react';

export const Styles = () => {
  const styles = styled.css({ width: '70%' });
  const Block = styled.tag('div', styles, { border: '1px solid' });

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

export const StylesByProps = () => {
  type BlockProps = { fullWidth?: boolean; active?: boolean };

  const styles = ({ fullWidth }: BlockProps) =>
    styled.css({
      width: fullWidth ? '100%' : '70%',
    });

  const Block = styled.tag('div', styles, ({ active }: BlockProps) => ({
    opacity: active ? 1 : 0.5,
  }));

  return (
    <>
      <Block fullWidth>
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
      <Block active>
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

export const Theme = () => {
  const styles = styled.css({
    padding: [8, 2, 4, 6],
    borderColor: 'turbo',
  });

  const Block = styled.tag('div', styles, {
    color: 'mangoTango',
    border: '1px solid',
  });

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

export const Alias = () => {
  const styles = styled.css({
    px: 4,
    py: 6,
  });

  const Block = styled.tag('div', styles, { bg: 'dune' });

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

export const SelectorBase = () => {
  type BlockProps = { isActive?: boolean };

  const allChild = ({ isActive }: BlockProps) =>
    styled.css('> *', {
      bg: isActive ? 'turbo' : 'dune',
    });

  const lastChild = styled.css('> :last-child', {
    bg: 'mangoTango',
  });

  const Block = styled.tag('div', allChild, lastChild);

  return (
    <Block isActive>
      <div>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non
        nostrum quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut
        nam, tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </Block>
  );
};

export const SelectorComponent = () => {
  type BlockProps = { isActive?: boolean };

  const First = styled.tag('div');
  const Last = styled.tag('div');

  const first = ({ isActive }: BlockProps) =>
    styled.css(First, {
      bg: isActive ? 'turbo' : 'dune',
    });

  const last = styled.css(Last, {
    bg: 'mangoTango',
  });

  const Block = styled.tag('div', first, last);

  return (
    <Block isActive>
      <First>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus.
      </First>
      <Last>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non
        nostrum quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut
        nam, tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Last>
    </Block>
  );
};

export const SelectorPseudos = () => {
  type BlockProps = { affex?: CSS['content'] };

  const pseudoElement = ({ affex }: BlockProps) =>
    styled.css('::after', {
      content: `"${affex}"`,
      display: 'block',
      bg: 'mangoTango',
    });

  const pseudoClass = styled.css(':hover', {
    borderColor: 'scarlet',
  });

  const Block = styled.tag(
    'div',
    {
      border: '10px solid',
      borderColor: 'dune',
    },
    pseudoElement,
    pseudoClass
  );

  const affex = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non
        nostrum quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut
        nam, tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  `;

  return (
    <Block affex={affex}>
      <div>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus.
      </div>
    </Block>
  );
};

export const SelectorMixed = () => {
  type ChildProps = { isActive?: boolean };

  const Child = styled.tag('div');

  const child = ({ isActive }: ChildProps) =>
    styled.css(Child, {
      border: '1px solid',
      bg: isActive ? 'turbo' : 'dune',
    });

  const firstChild = styled.css(
    Child,
    styled.css(':first-child', {
      bg: 'turbo',
    })
  );

  const secondChild = ({ isActive }: ChildProps) =>
    styled.css(
      Child,
      styled.css(
        ':nth-child(2)',
        { borderColor: 'scarlet' },
        styled.css(':hover', {
          bg: isActive ? 'turbo' : 'alabaster',
        })
      )
    );

  const lastChildContent = `"
    Laboriosam, nesciunt iusto eveniet sed consectetur magni quisquam sapiente voluptatum
    praesentium voluptates quis placeat pariatur veritatis mollitia molestias molestiae optio
    corporis? Sit?
  "`;

  const lastChild = styled.css(
    Child,
    styled.css(
      ':last-child',
      { borderColor: 'salat' },
      styled.css('::before', {
        content: lastChildContent,
        display: 'block',
        bg: 'mangoTango',
      })
    )
  );

  const Block = styled.tag('div', child, firstChild, secondChild, lastChild);

  return (
    <Block isActive>
      <Child>
        Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus.
      </Child>
      <Child>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit, officiis non
        nostrum quis, error excepturi beatae odio sed explicabo et minus id quaerat fugit amet ut
        nam, tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Child>
      <Child />
    </Block>
  );
};

export const Typography = () => {
  const Block = styled.tag(
    'div',
    styled.css({
      typography: [
        'mainSubBold',
        null,
        null,
        'mainLabelRegular',
        'mainLabelRegular',
        'mainSubBold',
        'mainSubBold',
      ],
    }),
    styled.css('> span', {
      typography: [
        'mainBodyRegular',
        'mainTitleRegular',
        'mainTitleRegular',
        'mainButtonMedium',
        'mainButtonMedium',
        'mainBodyRegular',
        'mainBodyRegular',
      ],
    }),
    styled.css('> :first-child', {
      typography: 'mainH1Medium',
    }),
    styled.css('> :first-child + p', {
      typography: 'mainH2Medium',
    }),
    styled.css('> :last-child', {
      typography: 'mainTinyRegular',
    })
  );

  return (
    <Block>
      <p>Your Scense is gong to review Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>
        Aliquid sequi numquam similique illo dolorum eius a nostrum ut doloribus, at officia
        necessitatibus quis mollitia voluptatum voluptate! Odio laudantium illum temporibus.
      </p>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      <p>
        Aspernatur velit, officiis non nostrum quis, error excepturi beatae odio sed explicabo et
        minus id quaerat fugit amet ut nam, tempora similique.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>
        Laboriosam, nesciunt iusto eveniet sed consectetur magni quisquam sapiente voluptatum
        praesentium voluptates quis placeat pariatur veritatis mollitia molestias molestiae optio
        corporis? Sit?
      </p>
    </Block>
  );
};

export default {
  title: 'Utils / styled / css',
  component: Alias,
  parameters: {
    docs: { page: mdx },
  },
} as Meta;
