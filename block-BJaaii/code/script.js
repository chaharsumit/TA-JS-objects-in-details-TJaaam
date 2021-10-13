/*

class Stack{
  constructor (){
    this.stack = [];
  }
  push(value){
    this.stack[this.stack.length] = value;
  }
  pop(){
    this.stack.length = this.stack.length - 1;
  }
  peek(peekArg){
    if(peekArg === undefined){
      console.log(this.stack[this.stack.length - 1]);
    }else{
      console.log(this.stack[peekArg]);
    }
  }
  reverse(){
    let temp = [...this.stack];
    for(let i = temp.length - 1, j = 0; i >= 0; i--,j++){
      this.stack[j] = temp[i];
    }
    console.log(this.stack);
  }
  isEmpty(){
    return this.stack.length !== 0 ? false : true;
  }
  get length(){
    return this.stack.length;
  }
  displayStack(){
    console.log(this.stack.join(' '));
  }
}
*/

/*

let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length);
myStack.peek();
myStack.peek(0);
myStack.reverse();
myStack.displayStack();
myStack.pop();
console.log(myStack.length);
console.log(myStack.peek());
console.log(myStack.isEmpty());
myStack.pop();
console.log(myStack.isEmpty());

*/

/*

class Queue{
  constructor(){
    this.queue = [];
  }
  enqueue(item){
    this.queue[this.queue.length] = item;
  }
  dequeue(){
    this.queue.length = this.queue.length - 1;
  }
  peek(peekArg){
    if(peekArg === undefined){
      console.log(this.queue[this.queue.length - 1]);
    }else{
      console.log(this.queue[peekArg]);
    }
  }
  isEmpty(){
    return this.queue.length !== 0 ? false : true;
  }
  displayQueue(){
    console.log(this.queue.join(' '));
  }
  get length(){
    return this.queue.length;
  }
}

let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Rohan"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty()); // true

*/