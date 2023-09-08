import { WebPlugin } from '@capacitor/core';
import type { CapacitorCookieDataPlugin } from './definitions';
export declare class CapacitorCookieDataWeb extends WebPlugin implements CapacitorCookieDataPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
