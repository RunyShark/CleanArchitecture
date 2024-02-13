/**
 * Enum representing valid prototype names or types.
 * Used to distinguish between different kinds of class members
 * during reflection and method modification.
 *
 * @enum {string}
 */
export enum ValidPrototype {
  /** Represents the constructor prototype name. */
  constructor = "constructor",
  /** Represents the function type, used for methods. */
  function = "function",
}
