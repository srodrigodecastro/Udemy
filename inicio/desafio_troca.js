let a = 7;
let b = 94;

a = 94;
b = 7;

console.log(a);
console.log(b);

console.log("Outra forma de resolver o desafio");

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

console.log("mais uma forma de resolver o desafio");

[a, b] = [b, a];

console.log(a);
console.log(b);
