declare global {
  type primitiveTypes = string | number | Date | boolean;
  type Truthy<T> = T extends false | "" | 0 | null | undefined ? never : T;

  interface ObjectConstructor {
    keys<T>(o: T | ArrayLike<T>): (keyof T)[];
    entries<T>(o: T | ArrayLike<T>): [keyof T, T[keyof T]][];
    hasOwn<T extends object>(o: T, key: PropertyKey): key is keyof T;
  }
  interface ReadonlyArray<T> {
    includes(searchElement: any, fromIndex?: number): searchElement is T;
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): Truthy<T>[];
  }
  interface Array<T> {
    includes(searchElement: any, fromIndex?: number): searchElement is T;
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): Truthy<T>[];
  }
  interface Map<K, V> {
    has(key: unknown): boolean;
    get(key: unknown): V | undefined;
  }
}
export {};
