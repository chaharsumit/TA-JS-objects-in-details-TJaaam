// Prototypical Pattern

/*

let quizMethods = {
  isAnswerCorrect(index){
    if(index === this.correctAnswerIndex){
      return true;
    }else{
      return false;
    }
  },
  getCorrectAnswer(){
    return this.options[this.correctAnswerIndex];
  },
};

function createQuiz(title, options, correctAnswerIndex){
  let question = Object.create(quizMethods);
  question.title = title;
  question.options = options;
  question.correctAnswerIndex = correctAnswerIndex;
  return question;
}

let firstQuestion = createQuiz(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = createQuiz(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

*/


// PseudoClassical Pattern

/*

function CreateQuiz(title, options, correctAnswerIndex){
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = correctAnswerIndex;
}

CreateQuiz.prototype = {
  isAnswerCorrect(index){
    if(index === this.correctAnswerIndex){
      return true;
    }else{
      return false;
    }
  },
  getCorrectAnswer(){
    return this.options[this.correctAnswerIndex];
  },
}

let firstQuestion = new CreateQuiz(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new CreateQuiz(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

*/


//Class Pattern

/*

class Quiz{
  constructor(title, options, correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(index){
    if(index === this.correctAnswerIndex){
      return true;
    }else{
      return false;
    }
  }
  getCorrectAnswer(){
    return this.options[this.correctAnswerIndex];
  }
}

let firstQuestion = new Quiz(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Quiz(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

console.group(firstQuestion.title);
console.log(firstQuestion.options);
console.log(firstQuestion.correctAnswerIndex);
console.log(firstQuestion.getCorrectAnswer());
console.log(firstQuestion.isAnswerCorrect(1));
console.groupEnd();

console.group(secondQuestion.title);
console.log(secondQuestion.options);
console.log(secondQuestion.correctAnswerIndex);
console.log(secondQuestion.getCorrectAnswer());
console.log(secondQuestion.isAnswerCorrect(2));
console.groupEnd();

*/