import React from 'react';

import { styled } from '../';

import mdx from './attrs.mdx';

import type { InferProps } from '../';
import type { Meta } from '@storybook/react';

export const WithoutProps = () => {
  type InputProps = Pick<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'defaultChecked'>;

  const attrs = styled.attrs<InputProps>({
    type: 'checkbox',
    defaultChecked: true,
  });

  const Field = styled.tag('input', attrs);

  return <Field />;
};

export const WithProps = () => {
  type InputProps = Pick<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'>;
  type FieldProps = { isNumber?: boolean };

  const getProps = ({ isNumber }: FieldProps): InputProps => ({
    type: isNumber ? 'number' : 'text',
    placeholder: isNumber ? 'Введите число' : 'Введите текст',
  });

  const attrs = styled.attrs(getProps);

  const Field = styled.tag('input', attrs);

  return (
    <>
      <Field />
      <hr />
      <Field isNumber />
    </>
  );
};

export const StyleProps = () => {
  const styleProps = styled.system('color');
  const Base = styled.tag('div', styleProps);
  type BaseProps = InferProps<typeof styleProps>;

  const styles = styled.attrs<BaseProps>({ bg: 'mangoTango' });

  const Block = styled(Base, styles);

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
  title: 'Utils / styled / attrs',
  component: StyleProps,
  parameters: {
    docs: { page: mdx },
  },
} as Meta;
