// OBJETS (object)
//  https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Le_mod%C3%A8le_objet_JavaScript_en_d%C3%A9tails#Langages_de_prototypes_Langages_de_classes

// Déclaration littérale d'un objet simple
console.log("DECLARATION OBJET SIMPLE");

let myObject = {
  // Propriétés attribut (attribute properties)
  _myAttribute1: "Bonjour",
  _myAttribute2: 7,
  _myAttribute3: false
};

console.log(myObject);

// Lecture d'une propriété de type attribut
console.log("LECTURE AUX PROPRIETES ATTRIBUT");

let myVar1 = myObject._myAttribute1;
console.log(myVar1);

let myVar2 = myObject._myAttribute2;
console.log(myVar2);

let myVar3 = myObject._myAttribute3;
console.log(myVar3);

// // Affectation d'une propriété de type attribut
console.log("AFFECTATION DES PROPRIETES ATTRIBUT");

myObject._myAttribute1 = "Bonsoir";
console.log(myObject._myAttribute1);

myObject._myAttribute3 = true;
console.log(myObject._myAttribute3);

console.log(myObject);

// Déclaration littérale d'un objet avec méthodes
console.log("DECLARATION OBJET METHODES");

let myObjectPerson = {
  // Propriétés attribut (attribute properties)
  _name: "Nathan",
  _age: 25,
  // Propriétés méthode (method properties)
  sayHello: function () {
    console.log("Hello, my name is " + this._name + ". I'm " + this._age + " year old");
    return true;
  },
  // Methode qui affiche en console
  //  like: paremètre de type string qui dit ce que aime la personne
  sayHelloLike: function (like) {
    this.sayHello() + console.log(" and I like " + like);
    return true;
  },
  sayHelloDislike: function (dislike) {
    this.sayHello() + console.log(" I hate " + dislike);
    return true;
  },
};

// Appel de méthodes sur un objet
var myReturnValue = myObjectPerson.sayHello();
myObjectPerson.sayHelloLike("cheesecake");
myObjectPerson.sayHelloDislike("carot");

// Objet litteral avec accesseurs
console.log("OBJET LITTERAL AVEC ACCESSEURS");
let myObject2 = {
  // Propriétés attributs (attribute properties)
  _myAttribute1: "Bonsoir",
  _myAttribute2: 3.12,
  _myAttribute3: true,
  // Propriétés méthodes d'accès aux attributs (accessor properties)
  //  Getters
  get attribute1() {
    console.log("Getter pour _myAttribute1");
    return this._myAttribute1;
  },
  get attribute2() {
    console.log("Getter pour _myAttribute2");
    return this._myAttribute2;
  },
  get attribute3() {
    console.log("Getter pour _myAttribute3");
    return this._myAttribute3;
  },
  // Setters
  set attribute1(value) {
    console.log("Setter pour _myAttribute1");
    this._myAttribute1 = value;
  },
  set attribute2(value) {
    console.log("Setter pour _myAttribute2");
    this._myAttribute2 = value;
  },
  set attribute3(value) {
    console.log("Setter pour _myAttribute3");
    this._myAttribute3 = value;
  },
};

console.log("attribute1 vaut " + myObject2.attribute1);
console.log("attribute2 vaut " + myObject2.attribute2);
console.log("attribute3 vaut " + myObject2.attribute3);

myObject2.attribute3 = false;
console.log("attribute3 vaut " + myObject2.attribute3);

// Constructeur d'un objet en déclaration littéral
//  Impossible car il s'agit d'un SINGLETON