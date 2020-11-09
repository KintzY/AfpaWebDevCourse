// TABLEAUX (array)
//  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

// Déclaration
console.log("DECLARATION");
let myAssocArray = ["valeur_0", "valeur_1", "valeur_3"];
// Attention à l'ordre
let myAssocArrayBis = ["valeur_1", "valeur_0", "valeur_3"];

console.log(myAssocArray);

// Lecture de la valeur d'un indice (index), dit un élément
//  !!!! On compte les indexes en commençant à 0
console.log("LECTURE");

let myVar0 = myAssocArray[0];
let myVar1 = myAssocArray[1];
let myVar2 = myAssocArray[2];

console.log(myVar0);
console.log(myVar1);
console.log(myVar2);

// Taille du tableau (size)
console.log("TAILLE");
let myAssocArraySize = myAssocArray.length;
console.log(myAssocArraySize);

// // Elements particuliers
console.log("PREMIER ELEMENT");
console.log(myAssocArray[0]);
console.log("DERNIER ELEMENT");
console.log(myAssocArray[myAssocArray.length - 1]);

// Itération sur un tableau (boucle for)
//  Ancienne méthode universelle
console.log("ITERATION for");
let myAssocArray2 = [ // La longueur de mon tableau est de 6!
    "A", // Index 0
    "Z", // Index 1
    "E", // Index 2
    "R", // Index 3
    "T", // Index 4
    "Y" // Index 5
];
for (let i = 0; i < myAssocArray2.length; i++) {

    console.log("La valeur de l'index " + i + " est " + myAssocArray2[i]);

    // La valeur est-elle négative ?
    if (myAssocArray2[i] < 0) {
        // Je corrige à 0 les valeurs négatives
        myAssocArray2[i] = 0;
    }

}

// Itération sur un tableau (boucle for...of)
//  Attention non supporté par certains navigateur comme Internet Explorer
console.log("ITERATION for...of");
for (let myValue of myAssocArray2) {

    console.log("La valeur est " + myValue);

    // Ici je ne connais pas l'index i

}

// Modifier une valeur dans un tableau
console.log("MODIFICATION VALEUR");
console.log(myAssocArray2[4]);
myAssocArray2[4] = "z";
console.log(myAssocArray2[4]);

// Ajout d'une valeur à un tableau
console.log("AJOUT VALEUR");

console.log(myAssocArray2);
myAssocArray2[myAssocArray2.length] = 5;
console.log(myAssocArray2);


// Tableau à plusieurs dimensions
//  Exemple : feuille de calcul Excel
let feuilleExcel = [
    [
        13, // Colonne A
        "Coucou" // Colonne B
    ], // Numero de ligne 1 (index 0)
    [
        "Allo", // Colonne A
        true // Colonne B
    ] // Numero de ligne 2 (index 1)
];
// Valeur de la case B1
console.log("cellule B1");
console.log(feuilleExcel[0][1]);


// Itération sur un tableau en tant qu'objet (méthode forEach(callback))
//  On verra plus tard la notion de méthode et de callback

// Déclaration d'un tableau en tant qu'objet (new Array())
//  On verra plus tard la notion d'objet

// Manipulation de tableaux en tant qu'objet avec des méthodes (push(), pop()....)
//  On verra plus tard la notion de méthode