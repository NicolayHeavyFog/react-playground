// const mistake = [];
// mistake.push(1);
// // mappend types
// type myReadonly<T> = {
//   readonly [N in keyof T]: T[N] extends object ? myReadonly<T[N]> : T[N];
// };

// type myPartial<T> = {
//   [N in keyof T]?: T[N];
// };

// type myPick<T, K extends keyof T> = {
//   [N in K]: T[N];
// };

// // type inference
// type removeReadonly<T> = T extends myReadonly<infer E> ? E : T;

// type fnReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function concat(...args: string[]): string {
  console.log(args);
  return args.reduce((acc: string, arg: string) => acc + arg, "");
}

concat("Hello ", "World");

type howIDoIt = string;
type simeArray = Array<string | number>;

interface IMyHometask {
  howIDoIt: howIDoIt;
  simeArray: simeArray;
  withData: Array<{ howIDoIt: howIDoIt } | { simeArray: simeArray }>;
}

const MyHometask: IMyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

interface MyArray<T> {
  [N: number]: T;

  reduce(callback: (accumulator: T, value: T) => T): T;
  reduce(callback: (accumulator: T, value: T) => T, initialValue: T): T;
}

// [1, 2, 3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6

type MyPartial<T> = {
  [N in keyof T]: T[N] extends object ? MyPartial<T[N]> : T[N];
};
