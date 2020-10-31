export function isError(value: any) {
  return value instanceof Error && value && value.stack && value.message;
}
