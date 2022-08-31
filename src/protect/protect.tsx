import React from 'react';

import type { InferProps, Protect, ProtectedComponent, ProtectedProps } from './protect.types';
import type { FC } from 'react';

export const protect: Protect = <C extends FC, P = InferProps<C>>(Component: C) => {
  const name = Component.displayName || Component.name;
  const ProtectedComponent: FC<ProtectedProps> = ({ className: _, style: __, ...props }) => (
    // @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33116
    <Component {...(props as JSX.LibraryManagedAttributes<C, JSX.IntrinsicAttributes>)} />
  );
  ProtectedComponent.displayName = `Protect(${name})`;
  return ProtectedComponent as ProtectedComponent<P>;
};
