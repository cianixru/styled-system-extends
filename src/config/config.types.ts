/* eslint-disable @typescript-eslint/ban-types */

import type { StyledConfig as LibConfig } from 'styled-components';

export const $config = Symbol('config');

export type ConfigOption<P extends ConfigProps = {}> = LibConfig<P> | undefined;

export type ConfigOptions<P extends ConfigProps = {}> = {
  [$config]?: ConfigOption<P>;
};

type ConfigProps = Record<string, unknown>;

export type ShouldForwardProp = () => ConfigOptions;

export type WithConfig = <P extends ConfigProps = {}>(config: ConfigOption<P>) => ConfigOptions<P>;
