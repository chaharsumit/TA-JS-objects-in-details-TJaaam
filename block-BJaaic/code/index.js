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

function createDog(name, color){
  let dog = Object.create(dogMethods);
  dog.name = name;
  dog.color = color;
  return dog;
}

let tinku = createDog('tinku', 'blue');

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

function createCat(name, colorOfEyes){
  let cat = Object.create(catMethods);
  cat.name = name;
  cat.colorOfEyes = colorOfEyes;
  return cat;
}

let billo = createCat('billo', 'brown');


