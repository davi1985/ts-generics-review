interface PersonProtocol<T, U> {
  name: T;
  lastname: T;
  age: U;
}

interface PersonProtocolWithDefaultGenerics<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

const student: PersonProtocol<string, number> = {
  name: "Jonh",
  lastname: "Doe",
  age: 38,
};

const studentWithDefaultGenerics: PersonProtocolWithDefaultGenerics = {
  name: "Jonh",
  lastname: "Doe",
  age: 38,
};

console.log(student);
