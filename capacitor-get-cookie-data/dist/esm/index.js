import { registerPlugin } from '@capacitor/core';
const CapacitorCookieData = registerPlugin('CapacitorCookieData', {
    web: () => import('./web').then(m => new m.CapacitorCookieDataWeb()),
});
export * from './definitions';
export { CapacitorCookieData };
//# sourceMappingURL=index.js.map