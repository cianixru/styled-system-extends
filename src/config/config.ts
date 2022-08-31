import libShouldForwardProp from '@styled-system/should-forward-prop';

import { $config } from './config.types';

import type { ConfigOption, ConfigOptions, ShouldForwardProp, WithConfig } from './config.types';

export const getOption = (options: ConfigOptions): ConfigOption => options[$config];

// eslint-disable-next-line @typescript-eslint/ban-types
export const hasOption = (options: object): boolean => options.hasOwnProperty($config);

export const withConfig: WithConfig = config => ({
  [$config]: config,
});

export const shouldForwardProp: ShouldForwardProp = () =>
  withConfig({
    shouldForwardProp: prop => libShouldForwardProp(prop),
  });
