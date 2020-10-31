export function isTimestamp(value: any) {
  const timestamp = new Date(value).getTime();

  return !isNaN(parseFloat(timestamp)) && isFinite(timestamp);
}
