type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

const getKey: GetKeyFn = (obj, key) => obj[key];

const person = {
  name: "Jonh Doe",
  isDev: true,
  languages: ["JS", "TS"],
};

const language = getKey(person, "languages");
const isDev = getKey(person, "isDev");

console.log(language);
console.log(isDev);
