type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const entries = <T>(obj: T): Entries<T> => Object.entries(obj) as any;

export default entries;
