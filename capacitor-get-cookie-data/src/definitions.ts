export interface CapacitorCookieDataPlugin {
  getCookieExpiry(options: { value: string, url: string }): Promise<{ value: string }>;
}
