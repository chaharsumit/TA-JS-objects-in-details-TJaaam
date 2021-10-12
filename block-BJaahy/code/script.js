/*

class Square{
  constructor(side){
    this.width = side;
    this.height = side;
    this.numberOfTimes = 0;
  }
  description(){
    alert(`The square is ${width} x ${height}`);
  }
  calcArea(){
    return this.width * this.height;
  }
  get area(){
    if(this.numberOfTimes === 4){
      alert(`Upper Limit Reached`);
      return;
    }
    this.numberOfTimes++;
    return this.calcArea();
  }
  set area(areaOfSquare){
    if(areaOfSquare !== this.calcArea()){
      alert('Not a valid input');
    }else{
      this.width = Math.sqrt(areaOfSquare);
      this.height = Math.sqrt(areaOfSquare);
    }
  }
  static isEqual(a, b){
    return a.area === b.area ? true : false;
  }
}

let squareFirst = new Square(10);
let squareSecond = new Square(11);

*/

/*
// Tests

squareFirst.area; // 100
squareSecond.area // 121
squareSecond.area // 121
squareSecond.area // 121
squareSecond.area // 121
squareSecond.area // undefined
Square.isEqual(squareFirst,squareSecond); // false

*/


// User Class

/*

class User{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  set fullName(fullName){
    if(fullName.length < 5){
      alert(`Full name should be more than 5 characters`);
      return;
    }
    this.firstName = fullName.split(' ')[0];
    this.lastName = fullName.split(' ')[1];
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
  nameContains(str){
    return this.fullName.split(' ').includes(str);
  }
}

let userOne = new User('sumit', 'chahar');
let userTwo = new User('SUMIT', 'CHAHAR');

userOne.fullName = 'a'; // alert gets triggered
userOne.fullName = 'sumit'; // return fullName 'sumit'
userOne.nameContains('sumit'); // true
userTwo.nameContains('abc'); // false

*/