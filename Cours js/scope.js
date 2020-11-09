// Portée globale
var gMaVariableGlobale;
var _maVariableGlobale;

// var : portée fonction courante
console.log("VAR");
var x = 1;

if (x == 1) {
    var x = 2;
    console.log(x);
    // expected output: 2
}
console.log(x);
// expected output: 2


// let : portée bloc {...} courant (et les blocs imbriqués)
console.log("LET");
let y = 1;

if (y == 1) {
    let y = 2;
    console.log(y);
    // expected output: 2
}
console.log(y);
// expected output: 1


// Exemple avec une fonction
console.log("FONCTION RUN");
function run() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar);
    // Nouveau bloc
    {
        let baz = "Bazz";
        console.log(baz);
    }

    console.log(baz); // ReferenceError
}

run();

// Exemple avec la boucle for avec un compteur déclaré en let et un compteur var