// undefined can be overwritten via var undefined = 'oops'
export function isUndefined(value: any) {
  return value === void 0;
}
