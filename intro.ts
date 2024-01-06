const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type FilterCallback<T> = (value: T, index?: number, arr?: T[]) => boolean;

export function myFilter<T>(arr: T[], callbackfn: FilterCallback<T>): T[] {
  const newArr: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (callbackfn(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

const arr = myFilter(myArray, (value) => value % 2 === 0);

console.log(arr);
