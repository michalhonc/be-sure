export function isBoolean(value: any) {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}
