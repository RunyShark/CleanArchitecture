import { ValidPrototype } from './interface';
//decorator pattern
/**
 * A decorator function to auto-bind class methods to the instance.
 * This ensures that the context (`this`) of the methods is always the instance of the class,
 * even if the method is passed as a callback.
 *
 * @template T Constructor type.
 * @param {T} originalConstructor - Original class constructor.
 * @returns {T} - New class with auto-bound methods.
 */
export function BindMethods<T extends new (...args: any[]) => any>(
  originalConstructor: T
): T {
  return class extends originalConstructor {
    /**
     * Extended constructor for the new class.
     * @param {...any[]} args - Arguments to be passed to the original constructor.
     */
    constructor(...args: any[]) {
      super(...args);
      Object.getOwnPropertyNames(originalConstructor.prototype).forEach(
        (prototype) => {
          const method = this[prototype];
          if (
            prototype !== ValidPrototype.constructor &&
            typeof method === ValidPrototype.function
          ) {
            this[prototype] = method.bind(this);
          }
        }
      );
    }
  };
}
