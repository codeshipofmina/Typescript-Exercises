console.log("Welcome :)");

//! Intro-TS-Level-1_12

let dogName = "Leon";
console.log(dogName);

dogName = "elf";

let seventeen = 17;

const sum = seventeen + 44;
console.log(sum);

// ! Intro-TS-Level-1_13 (Operatoren)

// Addition
let addition_operator: number = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log("multiplication: " + multiplication_operator);
// Division
let division_operator: number = 4 / 2;
console.log("division: " + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log("modulus: " + modulo_operator);

// ! Intro-TS-Level-1_16 (Arithmetische Operatoren)

let score: number = 5 + 5 * 10;
console.log("Ergebnis: " + score);

let score2: number = (5 + 5) * 10;
console.log("Ergebnis: " + score2);

let score3 = 0;
score3 = score3 + 10;
console.log("Ergebnis: " + score3);

let score4 = 0;
score4 += 10;
console.log("Ergebnis: " + score4);

//Inkrementierungen und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
zahl = zahl + 1;
zahl += 1;

zahl++;
console.log("increment: " + zahl);

zahl--;
console.log("dekrement: " + zahl);

// ! Intro-TS-Level-1_8 (Variablen)

let x: number = 20;
let y: number = 30;

console.log(x + y);
console.log(x - y);
console.log(y - x);
console.log(x * y);
console.log(x / y);

let z: number = 10;

let resultOne: number = (x * y) / z;
console.log(resultOne);

let a: number = 15;
let b: number = 9;

console.log(a % b);

let c: number = 20;

let resultTwo: number = (a + b) * c;

console.log(resultTwo);

a++;
console.log(a);

b--;
console.log(b);

let resultThree: number = a - b;
console.log(resultThree);

console.log(resultOne % resultTwo);
