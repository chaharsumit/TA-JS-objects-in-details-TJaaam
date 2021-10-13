// PseudoClassical Pattern

/*

function CreateAnimal(location, noOfLegs){
  this.location = location;
  this.numberOfLegs = noOfLegs;
}

CreateAnimal.prototype = {
  eat(){
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation(newLocation){
    this.location = newLocation;
    return this.location;
  },
  summary(){
    return `I live in ${this.location} and I have ${this.noOfLegs}`;
  }
}


function CreateDog(location, noOfLegs,name, color){
  CreateAnimal.apply(this, [location, noOfLegs]);
  this.name = name;
  this.color = color;
}


CreateDog.prototype = {
  bark(){
    console.log(`I am ${this.name} and I can bark`);
  },
  changeName(newName){
    this.name = newName;
    return this.name;
  },
  changeColor(newColor){
    this.color = newColor;
    return this.color;
  },
  summary(){
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

Object.setPrototypeOf(CreateDog.prototype, CreateAnimal.prototype);


let tinku = new CreateDog('fazilka', 4,'tinku', 'brown');



function CreateCat(location, noOfLegs, name, colorOfEyes){
  CreateAnimal.apply(this, [location, noOfLegs]);
  this.name = name;
  this.colorOfEyes = colorOfEyes;
}

CreateCat.prototype = {
  meow(){
    alert(`I am ${this.name} and I can do meow meow`);
  },
  changeName(newName){
    this.name = newName;
    return this.name;
  },
  changeColorOfEyes(newColor){
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary(){
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}


Object.setPrototypeOf(CreateCat.prototype, CreateAnimal.prototype);


let billo = new CreateCat('fazilka', 4, 'billo', 'brown');


*/


// Using Classes

/*

class Animal{
  constructor(location, noOfLegs){
    this.location = location;
    this.numberOfLegs = noOfLegs;
  }
  eat(){
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation){
    this.location = newLocation;
    return this.location;
  }
  summary(){
    return `I live in ${this.location} and I have ${this.noOfLegs}`;
  }
}

class Dog extends Animal{
  constructor(location, noOfLegs,name, color){
    super(location, noOfLegs);
    this.name = name;
    this.color = color;
  }
  bark(){
    console.log(`I am ${this.name} and I can bark`);
  }
  changeName(newName){
    this.name = newName;
    return this.name;
  }
  changeColor(newColor){
    this.color = newColor;
    return this.color;
  }
  summary(){
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}

class Cat extends Animal{
  constructor(location, noOfLegs, name, colorOfEyes){
    super(location, noOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow(){
    alert(`I am ${this.name} and I can do meow meow`);
  }
  changeName(newName){
    this.name = newName;
    return this.name;
  }
  changeColorOfEyes(newColor){
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  }
  summary(){
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}

let tinku = new Dog('fazilka', 4, 'tinku', 'brown');
let billo = new Cat('fazilka', 4, 'billo', 'brown');

*/