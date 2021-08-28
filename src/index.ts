function foo(x: string | number) {
  const one = typeof x === "string";
  const two = one;
  const three = two;
  const four = three;
  const five = four;
  const six = five;
  const seven = six;
  if (one) {
    const example: string = x;
  }
  if (five) {
    const example: string = x;
  }
  if (six) {
    const example: string = x;
  }
}