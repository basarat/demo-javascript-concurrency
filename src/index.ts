type Circle = { radius: number };
type Square = { size: number };
const example = getShape();

if (someCondition) {
  // @ts-ignore
  declare const example: Circle;
  console.log('I know its a circle', example.radius);
}