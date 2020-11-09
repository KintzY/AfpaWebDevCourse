// CONTROLE DE FLUX (flow control)

// Condition SI...ALORS (if...then)
console.log('IF');
let x = 25;

if (x > 10) {
    console.log('x is greater than 10');
}


// Condition SI...SINON (if...else)
console.log('IF ELSE');
let y = 5;

let h = 3;
if (y < 10) {
    console.log("Bloc IF h = " + h);
    console.log('y is greater than 10');
} else {
    console.log("Bloc ELSE h = " + h);
    console.log('y is less than or equal 10');
}

// Enchainement de conditions SI/SINON (if...else if...else)
console.log('IF ELSE IF ELSE');
let a = 10;
let b = 20;

if (a > b) {
    console.log('a is greater than b');
} else if (a < b) {
    console.log('a is less than b');
} else if (a == b) {
    console.log('a is equal to b');
} else {
   console.log('il y a un truc qui coince');   
}

// Raccourci de la condition SI/SINON = opérateur ternaire (ternary operator)
//let z = y < 4 ? 'vrai' : 'faux';
// console.log('y is less than 4: ' + z);