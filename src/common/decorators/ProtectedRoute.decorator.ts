export function ProtectedRoute(constructor: Function) {
  const originalMethod = constructor.prototype;

  Object.getOwnPropertyNames(originalMethod).forEach((method) => {
    console.log(method);
  });
}
