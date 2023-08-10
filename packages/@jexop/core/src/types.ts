export type Operator<T = unknown> = (props: Record<string, unknown>, context?: any) => T | null;
