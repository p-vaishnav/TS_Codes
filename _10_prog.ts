// something about type inference

// :type syntax is not always appreciated in typescript
let myString: string = 'Success';
console.log(myString);

// the above code can be written in this way as well, this is completely valid way to write it
let myString1 = 'Excellence';
console.log(myString1);
myString1 = 100;
// error does appear, so typescript is smart enough to understand that myString1 variable has a string assigned to it