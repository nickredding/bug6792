import { registerPlugin } from '@capacitor/core';

import type { CapacitorCookieDataPlugin } from './definitions';

const CapacitorCookieData = registerPlugin<CapacitorCookieDataPlugin>(
  'CapacitorCookieData',
  {
    web: () => import('./web').then(m => new m.CapacitorCookieDataWeb()),
  },
);

export * from './definitions';
export { CapacitorCookieData };
