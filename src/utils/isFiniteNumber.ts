// False for Infinity, -Infinity and NaN
export function isFiniteNumber(value: any) {
  return typeof value === 'number' && isFinite(value);
}
