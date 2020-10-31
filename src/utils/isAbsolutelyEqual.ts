export function isAbsolutelyEqual(value1: any, value2: any) {
  if (value1 === 0 && value2 === 0) {
    return 1 / value1 === 1 / value2;
  }
  // test for `NaN`
  if (value1 !== value1) {
    return value2 !== value2;
  }

  return value1 === value2;
}
