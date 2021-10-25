class Question{
  constructor(title, options = [], correctAnswer){
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
  isCorrect(answer){
    if(answer === this.correctAnswer){
      return true;
    }else{
      return false;
    }
  }
  getCorrecctAnswer(){
    return this.correctAnswer;
  }
  createUI(){
    let ul = document.createElement('ul');
    ul.classList.add('flex', 'ques');
  }
}

class Quiz{
  constructor(allQuestions = [], activeIndex = 0, score = 0){
    this.allQuestions = allQuestions;
    this.activeIndex = activeIndex;
    this.score = score;
  }
  nextQuestion(){

  }
  createUI(){

  }
  updateScore(answer){
    if(isCorrect(answer)){
      score++;
    }
  }
}