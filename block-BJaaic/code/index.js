let animalMethods = {
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

function createAnimal(location, noOfLegs){
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.numberOfLegs = noOfLegs;
  return animal;
}


function createDog(location, noOfLegs,name, color){
  let dog = createAnimal(location, noOfLegs);
  Object.setPrototypeOf(dog, dogMethods);
  dog.name = name;
  dog.color = color;
  return dog;
}



let dogMethods = {
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

Object.setPrototypeOf(dogMethods, animalMethods);

let tinku = createDog('fazilka', 4,'tinku', 'brown');



function createCat(location, noOfLegs, name, colorOfEyes){
  let cat = createAnimal(location, noOfLegs);
  Object.setPrototypeOf(cat, catMethods);
  cat.name = name;
  cat.colorOfEyes = colorOfEyes;
  return cat;
}

let catMethods = {
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

Object.setPrototypeOf(catMethods, animalMethods);

let billo = createCat('fazilka', 4, 'billo', 'brown');


