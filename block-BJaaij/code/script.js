class BookList{
  constructor(){
    this.allBooks = [];
  }
  add(book){
    this.allBooks.push(book);
  }
  getCurrentBook(index){
    return this.allBooks[index];
  }
  getNextBook(index){
    return this.allBooks[index + 1];
  }
  getPrevBook(index){
    return this.allBooks[index - 1];
  }
  changeCurrentBook(updateIndex){
    return this.allBooks[updateIndex];
  }
}

class Book extends BookList{
  constructor(title, category, author, finishedDate){
    super();
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = finishedDate;
  }
  markBookAsRead(){
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}


