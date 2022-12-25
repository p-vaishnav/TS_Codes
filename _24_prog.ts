// conventional arrays
const _arr: (string | number)[] = ['Excellence', 'Patience', 'Success', 100];
console.log(_arr);

// tuples in type script
// tuples are just like arrays, they are just used to maintain the sequence of the types

const _rgb: [number, number, number] = [125, 255, 255];
type RGB = [number, number, number];
const _rgb1: RGB = [245, 240, 230];
console.log(_rgb1);