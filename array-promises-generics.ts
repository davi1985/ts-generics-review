const arr: Array<number> = [1, 2, 3, 4, 5];

console.log(arr);

async function promiseAsync() {
  return 1;
}

function myPromise(): Promise<number> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, 1000),
  );
}

promiseAsync().then((res) => console.log(res + 1));
