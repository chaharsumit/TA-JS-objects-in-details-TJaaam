let score = 1;
let totalQuestions = quizQuestions.length;
class Question{
  constructor(title, options = [], correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
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
  nextQuestion(){
    this.createUI();
  }
  ifCorrect(answer){
    if(this.activeIndex === totalQuestions - 1){
      return setTimeout(() => {
        this.createScoreCard();
      }, 1000);
    }
    let optionsForQuestion = this.allQuestions[this.activeIndex].options;
    let rightAnswer = this.allQuestions[this.activeIndex].correctAnswerIndex;
    if(optionsForQuestion[rightAnswer] === answer){
      ++score;
    }
    this.activeIndex++;
    return setTimeout(() => {
      this.nextQuestion();
    }, 1000); 
  }
  createUI(){
    this.root.innerHTML = '';
    this.allQuestions.forEach((question,index) => {
      if(index === this.activeIndex){
        let ui = question.createUI();
        ui.querySelectorAll('li').forEach(op => {
          op.addEventListener('click', this.ifCorrect.bind(this, op.innerHTML));
        });
        this.root.append(ui);
      }
    });
  }
  createScoreCard(){
    this.root.innerHTML = '';
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Your score is:';
    let p = document.createElement('p');
    p.innerHTML = `${score} / ${totalQuestions}`;
    this.root.append(h2,p);
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

quiz.createUI();

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