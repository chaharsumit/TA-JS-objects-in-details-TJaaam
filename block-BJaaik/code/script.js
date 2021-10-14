class Person{
  constructor(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat(){
    console.log('person eats');
  }
  sleep(){
    console.log('person sleeps');
  }
  walk(){
    console.log('person walks');
  }
}

class Player extends Person{
  constructor(name,age,gender,sportsName){
    super(name,age,gender);
    this.sportsName = sportsName;
  }
  play(){
    console.log(`I play ${this.sportsName}`);
  }
}

class Cricketer extends Player{
  constructor(age,name,gender,sportsName,teamName){
    super(age,name,gender,sportsName);
    this.teamName = teamName;
  }
  playCricket(){
    console.log(`I play cricket for ${this.teamName}`);
  }
}

class Teacher extends Person{
  constructor(name,age,gender,instituteName){
    super(name,age,gender);
    this.instituteName = instituteName;
  }
  teach(){
    console.log(`I teach at ${this.instituteName}`);
  }
}

class Artist extends Person{
  constructor(name,age,gender, kind){
    super(name,age,gender);
    this.kind = kind;
  }
  createArt(){
    console.log(`I create ${this.instituteName} kind of art`);
  }
}