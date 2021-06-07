/**
 * Asynchronously loads the component for NotFoundPage
 */

import { lazyLoad } from 'utils/loadable';

export const NotFoundPage = lazyLoad(
  async () => await import('./index'),
  module => module.NotFoundPage,
);
