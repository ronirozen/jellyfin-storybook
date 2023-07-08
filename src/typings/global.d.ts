declare global {
  type primitiveTypes = string | number | Date | boolean;
  interface ObjectConstructor {
    keys<T>(o: T | ArrayLike<T>): [keyof T][];
    entries<T>(o: T | ArrayLike<T>): [keyof T, T[keyof T]][];
  }
  interface ReadonlyArray<T> {
    includes(searchElement: any, fromIndex?: number): searchElement is T;
  }
}
export {};
