import React from 'react';

import { styled } from '../';

import { systemStyles } from './system.helpers';
import mdx from './system.mdx';

import type { Meta } from '@storybook/react';

export const SystemStyles = () => {
  const styleProps = styled.system('border', 'color', 'space');
  const Block = styled.tag('div', styleProps);

  return (
    <Block bg='mangoTango' color='dune' px={4} py={6} border='1px solid' borderColor='scarlet'>
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

export const NonSystemStyles = () => {
  const styleProps = styled.system('textDecoration', 'textTransform');
  const Block = styled.tag('div', styleProps);

  return (
    <Block textDecoration='underline' textTransform='capitalize'>
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

export const AdditionalStyles = () => {
  const styleProps = styled.system('bgGradient', 'boxShadow', 'gap');
  const Block = styled.tag('div', styleProps);

  return (
    <Block bgGradient='slidefilter' boxShadow='primary' gap={4}>
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

export const MixedStyles = () => {
  const styleProps = styled.system('bgGradient', 'space', 'textDecoration');
  const Block = styled.tag('div', styleProps);

  return (
    <Block bgGradient='slidefilter' p={4} textDecoration='underline'>
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

export const FullSystemStyles = () => {
  const styleProps = styled.system(...systemStyles);
  const Block = styled.tag('div', styleProps);

  return (
    <Block
      alignContent='center'
      alignItems='center'
      alignSelf='center'
      bg='dune'
      background='dune'
      backgroundColor='dune'
      backgroundImage='none'
      backgroundSize='contain'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      borderBottom='1px solid'
      borderBottomLeftRadius={1}
      borderBottomRightRadius={1}
      borderBottomStyle='dotted'
      borderBottomWidth={1}
      borderColor='turbo'
      borderLeft='1px solid'
      borderLeftStyle='dotted'
      borderLeftWidth={1}
      border='1px solid'
      borderRadius={1}
      borderRight='1px solid'
      borderRightStyle='dotted'
      borderRightWidth={1}
      borderStyle='dotted'
      borderTop='1px solid'
      borderTopLeftRadius={1}
      borderTopRightRadius={1}
      borderTopStyle='dotted'
      borderTopWidth={1}
      borderWidth={1}
      bottom={0}
      color='alabaster'
      display='inline-flex'
      flex={1}
      flexBasis={0}
      flexDirection='column'
      flexGrow={1}
      flexShrink={1}
      flexWrap='nowrap'
      gridArea='auto'
      gridAutoColumns='max-content'
      gridAutoFlow='dense'
      gridAutoRows='min-content'
      gridColumn='auto'
      gridColumnGap={2}
      gridGap={2}
      gridRow='auto'
      gridRowGap={2}
      gridTemplateAreas='none'
      gridTemplateColumns='max-content'
      gridTemplateRows='max-content'
      height={200}
      justifyContent='space-around'
      justifyItems='flex-end'
      justifySelf='stretch'
      left={0}
      m={4}
      margin={4}
      mb={4}
      marginBottom={4}
      ml={4}
      marginLeft={4}
      mr={4}
      marginRight={4}
      mt={4}
      marginTop={4}
      my={4}
      marginY={4}
      mx={4}
      marginX={4}
      maxHeight='max-content'
      maxWidth='max-content'
      minHeight='min-content'
      minWidth='min-content'
      opacity={1}
      order={1}
      overflow='visible'
      overflowX='hidden'
      overflowY='scroll'
      p={2}
      padding={2}
      pb={2}
      paddingBottom={2}
      pl={2}
      paddingLeft={2}
      pr={2}
      paddingRight={2}
      pt={2}
      paddingTop={2}
      py={2}
      paddingY={2}
      px={2}
      paddingX={2}
      position='sticky'
      right={0}
      size={200}
      textAlign='justify'
      textShadow='1px 1px red'
      top={0}
      verticalAlign='baseline'
      width={300}
      zIndex={0}>
      Техническая сторя
    </Block>
  );
};

export default {
  title: 'Utils / styled / system',
  component: SystemStyles,
  parameters: {
    docs: { page: mdx },
  },
} as Meta;
