// FONCTIONS (functions)

// Déclaration d'une procédure simple
// function hello() {
//    console.log("Hello world!");
// }

// // Appel/invocation (call)
// hello();

// Déclaration d'une procédure avec paramètre
// function helloYou(name) {
//    console.log("Hello " + name);
// }

// // Fonction qui affiche dans la console une chaine de caractère au format "Hello <genre> <name>"
// //   name: string du nom de la personne
// //   gender: string du genre de la personne, valeurs autorisées "Madame" ou "Monsieur"
// function helloYou2(name, gender) {
//    console.log("Hello " + gender + " " + name);
// }

// // Appel avec passage d'arguments
// helloYou("Samuel");
// helloYou2("Catherine", "Madame");

// Fonction avec valeur de retour
function add(x, y){
    console.log("Adding " + x + " and " + y + " = " + (x + y));
    return x + y;
}

let r = add(7, 14);
console.log("Mon résultat est " + r);

// Appel de la fonction en passant en arguments des variables
let monX = 12;
let monY = 87;

console.log("Ici le résultat donne " + add(monX, monY));