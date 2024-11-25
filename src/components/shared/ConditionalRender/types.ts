import { ReactNode } from 'react';

export type ConditionalRenderProps = {
  shouldRender: boolean;
  fallback?: ReactNode;
  children: ReactNode;
};
