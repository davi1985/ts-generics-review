function unionObj<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: "JS" };
const obj2 = { key2: "TS" };

const union = unionObj(obj1, obj2);

console.log(union);
