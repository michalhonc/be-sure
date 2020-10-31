// https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise
export function isPromise(value: any) {
  return value instanceof Promise;

  //return p && Object.prototype.toString.call(p) === "[object Promise]";
}
