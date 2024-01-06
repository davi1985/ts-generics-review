const obj: Record<string, string | number> = {
  name: "Davi",
  age: 38,
};

type Person = {
  name?: string;
  lastname?: string;
  age?: number;
};

type PersonRequired = Required<Person>;
type PersonPartial = Partial<PersonRequired>;
type PersonReadOnly = Readonly<PersonRequired>;
type PersonPick = Pick<PersonRequired, "name" | "age">;

const obj2: Person = {
  name: "Davi",
  age: 38,
};

type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";

type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: "qertertgsdfg",
  name: "Davi Silva",
  age: 38,
};

function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...data } = accountMongo;

  return { ...data, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);
