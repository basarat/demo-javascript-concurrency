export const pass = (value: string) =>
  new Promise(
    (res) => setTimeout(() => res(value), 1000)
  );

export const fail = (err: string) =>
  new Promise(
    (_, rej) => setTimeout(() => rej(new Error(err)), 1000)
  );