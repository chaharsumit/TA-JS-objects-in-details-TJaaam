class BookList{
  constructor(){
    this.allBooks = [];
    this.currentIndex = 0;
  }
  add(book){
    this.allBooks.push(book);
  }
  getCurrentBook(){
    return this.allBooks[currentIndex];
  }
  getNextBook(index){
    return this.allBooks[currentIndex + 1];
  }
  getPrevBook(index){
    return this.allBooks[currentIndex - 1];
  }
  changeCurrentBook(updateIndex){
    return this.currentIndex = updateIndex;
  }
}

class Book{
  constructor(title, category, author){
    super();
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead(){
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}


