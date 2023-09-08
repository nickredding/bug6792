export interface CapacitorCookieDataPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
