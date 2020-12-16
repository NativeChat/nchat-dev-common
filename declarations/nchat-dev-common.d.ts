export interface ILogger {
    child(properties: any): ILogger;
    info(...args: any[]): void;
    error(...args: any[]): void;
    debug(...args: any[]): void;
    warn(...args: any[]): void;
}

export interface IStringFormatter {
    format(template: string, mergeContext?: { [key: string]: any }, visitedProperties?: string[]): string;
}
