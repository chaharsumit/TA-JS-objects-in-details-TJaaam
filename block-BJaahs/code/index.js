/*
let title = 'What is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

let indexOfAnswer = prompt(`${title}
options are ${options}`) - 1;
function isAnswerCorrect(index){
  if(index === correctAnswerIndex){
    return true;
  }else{
    return false;
  }
}

function getCorrectAnswer(){
  return options[correctAnswerIndex];
}
*/

/*
const questionObj = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
  isAnswerCorrect(index){
    if(index === questionObj.correctAnswerIndex){
      return true;
    }else{
      return false;
    }
  },
  getCorrectAnswer(){
    return questionObj.options[questionObj.correctAnswerIndex];
  }
};

let indexOfAnswer = prompt(`${questionObj.title}
options are ${questionObj.options}`) - 1;

questionObj.isAnswerCorrect(indexOfAnswer);
questionObj.getCorrectAnswer();
*/

/*
function createQuestion(title, options, correctAnswerIndex){
  let  questionObj = {};
  questionObj.title = title;
  questionObj.options = options;
  questionObj.correctAnswerIndex = correctAnswerIndex;
  questionObj.isAnswerCorrect = (index) => {
    if(index === questionObj.correctAnswerIndex){
      return true;
    }else{
      return false;
    }
  };
  questionObj.getCorrectAnswer = () => {
    return questionObj.options[questionObj.correctAnswerIndex];
  };
  return questionObj;
}

let question1 = createQuestion('What is the capital of vietnam', ['hanoi', 'ho chi minh', 'hue', 'can tho'], 0);

let indexOfAnswer = prompt(`${question1.title}
options are ${question1.options}`) - 1;

question1.isAnswerCorrect(indexOfAnswer);
question1.getCorrectAnswer();
*/

/*
function createQuestion(title, options, correctAnswerIndex){
  let  questionObj = {};
  questionObj.title = title;
  questionObj.options = options;
  questionObj.correctAnswerIndex = correctAnswerIndex;
  questionObj.isAnswerCorrect = function(index){
    if(index === this.correctAnswerIndex){
      return true;
    }else{
      return false;
    }
  };
  questionObj.getCorrectAnswer = function(){
    return this.options[this.correctAnswerIndex];
  };
  return questionObj;
}

let question1 = createQuestion('What is the capital of vietnam', ['hanoi', 'ho chi minh', 'hue', 'can tho'], 0);

let indexOfAnswer = prompt(`${question1.title}
options are ${question1.options}`) - 1;

question1.isAnswerCorrect(indexOfAnswer);
question1.getCorrectAnswer();
*/

/*
function createQuestion(title, options, correctAnswerIndex){
  let  questionObj = {};
  questionObj.title = title;
  questionObj.options = options;
  questionObj.correctAnswerIndex = correctAnswerIndex;
  questionObj.isAnswerCorrect = function(index){
    if(index === this.correctAnswerIndex){
      return true;
    }else{
      return false;
    }
  };
  questionObj.getCorrectAnswer = function(){
    return this.options[this.correctAnswerIndex];
  };
  return questionObj;
}

let question1 = createQuestion('What is the capital of Vietnam', ['hanoi', 'ho chi minh', 'hue', 'can tho'], 0);
let question2 = createQuestion('What is the capital of Ukraine', ['Lviv', 'Kharkiv', 'Kiev', 'Donetsk'], 2);


console.group(question1.title);
console.log(question1.options);
console.log(question1.correctAnswerIndex);
console.log(question1.isAnswerCorrect(0));
console.log(question1.getCorrectAnswer());
console.groupEnd();


console.group(question2.title);
console.log(question2.options);
console.log(question2.correctAnswerIndex);
console.log(question2.isAnswerCorrect(2));
console.log(question2.getCorrectAnswer());
console.groupEnd();
*/

