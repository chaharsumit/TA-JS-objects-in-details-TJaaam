let score = 0;
let totalQuestions = quizQuestions.length;
class Question{
  constructor(title, options = [], correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isCorrect(answer){
    if(this.options[this.correctAnswerIndex] === answer){
      return true;
    }else{
      return false;
    }
  }
  getCorrecctAnswer(){
    return this.options[this.correctAnswerIndex];
  }
  createUI(){
    let ul = document.createElement('ul');
    ul.classList.add('flex', 'ques');
    let title = document.createElement('h2');
    title.innerHTML = this.title;
    let op1 = document.createElement('li');
    op1.innerHTML = this.options[0];
    let op2 = document.createElement('li');
    op2.innerHTML = this.options[1];
    let op3 = document.createElement('li');
    op3.innerHTML = this.options[2];
    let op4 = document.createElement('li');
    op4.innerHTML = this.options[3];
    ul.append(title,op1,op2,op3,op4);
    return ul;
  }
}

class Quiz{
  constructor(root, allQuestions = [], score = 0){
    this.allQuestions = allQuestions;
    this.activeIndex = 0;
    this.score = score;
    this.root = root;
  }
  addQuestion(title, options = [], correctAnswerIndex){
    let question = new Question(title, options, correctAnswerIndex);
    this.allQuestions.push(question);
  }
  createUI(){
    this.root.innerHTML = '';
    this.allQuestions.forEach(question => {
      this.root.append(question.createUI());
    });
  }
  updateScore(answer){
    if(isCorrect(answer)){
      score++;
    }
  }
}
let root = document.getElementById('question-body');
let quiz = new Quiz(root);

quizQuestions.forEach(question => {
  quiz.addQuestion(question.title, question.options, question.correctAnswerIndex);
});

/*<article class="question-container">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, asperiores!</h2>
        <ul class="ques flex">
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </article>    
*/