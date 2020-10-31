/*
 * If is object and is not array (array is JS object) and is not null
 */
export function isObject (value: any) {
  return typeof value === "object" && !Array.isArray(value) && value !== null;
}
