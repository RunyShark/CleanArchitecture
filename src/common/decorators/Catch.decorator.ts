import { ReposeService } from '../service';
import { ValidPrototype } from './interface';
//decorator pattern
/**
 * Decorator to wrap each method of a class in a try-catch block.
 * In case of an error, it logs the method name and delegates error handling to an
 * instance of `ReposeService` present in the class instance.
 *
 * @param {Function} constructor - The class constructor.
 */

export function Catch(constructor: Function) {
  const originalPrototype = constructor.prototype;
  Object.getOwnPropertyNames(originalPrototype).forEach((name) => {
    if (
      name !== ValidPrototype.constructor &&
      typeof originalPrototype[name] === ValidPrototype.function
    ) {
      const originalFunction = originalPrototype[name];

      originalPrototype[name] = async function (
        this: { reposeService: ReposeService },
        ...args: any[]
      ) {
        try {
          return await originalFunction.apply(this, args);
        } catch (error) {
          const errorMessage = (error as Error).message;
          console.error(`Error in method ${name}:`, errorMessage);

          return this.reposeService.errorHandle(errorMessage);
        }
      };
    }
  });
}