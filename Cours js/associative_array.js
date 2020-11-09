// TABLEAUX ASSOCIATIFS (associative array)
//  https://www.xul.fr/javascript/associative.php

// Déclaration
console.log("DECLARATION");

let myAssocArray = {
    "cle_titi": "valeur_titi",
    "cle_toto": "valeur_toto",
    "cle_tata": "valeur_tata"
};

console.log(myAssocArray);

// Lecture de la valeur (value) d'une clé (key) UNIQUE
console.log("LECTURE");

let myVar0 = myAssocArray["cle_titi"];
let myVar1 = myAssocArray["cle_toto"];
let myVar2 = myAssocArray["cle_tata"];

console.log(myVar0);
console.log(myVar1);
console.log(myVar2);

// Itération sur un tableau (boucle for...in)
console.log("ITERATION for...in");

let myAddressBook = {
    "Pierre": "pierre@gmail.com",
    "Téo": "theo15@orange.fr",
    "Sandrine": "Didine23@wanadoo.fr"
};

for (let key in myAddressBook) {
    console.log("La valeur de la clé " + key + " est " + myAddressBook[key]);
}

// Exemples
let stock = {
    "pomme": 5,
    "tomate": 10,
    "carotte": 15
}

console.log(stock["carotte"]);

let mouvementBancaire = {
    "15:26'24 2020-10-23": 99.2,
    "15:34'26 2020-10-23": -100.0   
}

let userProfiles = {
    "Alfred": [
        "Alfred", // Nom (index 0)
        "lfsdhlfqsdlkhfsdhf3235", // Mot de passe (index 1)
        23 // Age (index 2)
    ],
    "Alfred01": [
        "Alfred",
        "457XCJXCJHC",
        38
    ],
    "Didine23": [
        "Sandrine",
        ".?JL?%3SQF",
        57
    ],
    "Tomcat": [
        "Thomas",
        "983DQSK",
        66
    ]
}
// Quel est l'âge de Didine23?
console.log("AGE DE DIDINE")
console.log(userProfiles["Didine23"][2]);