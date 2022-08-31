import type { FC, HTMLAttributes } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type InferProps<C extends FC> = C extends FC<infer Props> ? Props : {};

export type Protect = <C extends FC, P = InferProps<C>>(Component: C) => ProtectedComponent<P>;

export type ProtectedComponent<P> = FC<P>;

export type ProtectedProps = Pick<HTMLAttributes<HTMLElement>, 'className' | 'style'>;
