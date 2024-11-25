import { ConditionalRenderProps } from './types';

export function ConditionalRender({
  children,
  shouldRender,
  fallback,
}: ConditionalRenderProps) {
  if (!shouldRender) {
    if (fallback) return fallback;
    return null;
  }

  return children;
}
