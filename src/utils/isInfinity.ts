export function isInfinity(value: any, direction?: 'positive' | 'negative') {
  if (direction === 'positive') {
    return value === Number.POSITIVE_INFINITY;
  } else if (direction === 'negative') {
    return value === Number.NEGATIVE_INFINITY;
  }

  return value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY;
}
