import { WebPlugin } from '@capacitor/core';

import type { CapacitorCookieDataPlugin } from './definitions';

export class CapacitorCookieDataWeb
  extends WebPlugin
  implements CapacitorCookieDataPlugin
{
  async getCookieExpiry(options: { value: string, url: string }): Promise<{ value: string }> {
    console.log('getCookieExpiry not available for web', options);
    return options;
  }
}
