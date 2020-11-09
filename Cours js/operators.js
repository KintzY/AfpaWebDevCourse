// OPERATEURS

// Assignation (voir variables)
var a = 8;
var b;

b = a;
console.log(b);

// Comparaison
let x = 5;
let y = 10;

let r1 = (20 > 10);
console.log('R1: ' + r1);
let r2 = (y < x);
console.log('R2: ' + r2);
let r3 = x == 5;
console.log('R3: ' + r3);
let r4 = 10 <= 10;
console.log('R4: ' + r4);
let r5 = x >= 5;
console.log('R5: ' + r5);
let r6 = 10 != y;
console.log('R6: ' + r6);

let name = 'Alfred';
console.log(name == 'Alfred');

// Logique
let vrai = true;
let faux = false;

let not = !vrai; // INVERSE (not)
console.log('NOT vrai: ' + not);
let and = vrai && faux; // ET (and)
console.log('vrai AND faux: ' + and);
let or = vrai || faux; // OU (or)
console.log('vrai OR faux: ' + or);