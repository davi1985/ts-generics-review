function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

function sum<T>(...args: T[]): number {
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }

    return sum;
  }, 0);

  return result;
}
