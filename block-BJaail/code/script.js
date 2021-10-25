class BookList{
  constructor(root,list = []){
    this.books = list;
    this.root = root;
  }
  add(author, title, url){
    let book = new Book(author, title, url);
    this.books.push(book);
    this.createUI();
    return this.books.length;
  }
  delete(id){
    let index = this.books.findIndex(book => book.id === id);
    this.books.splice(index, 1);
    this.createUI();
    return this.books.length;
  }
  createUI(){
    this.books.forEach(book => {
      let ui = book.createUI();
      ui.querySelector("cross").addEventListener('click', this.delete.bind(this, book.id));
      this.root.append(ui);
      }
    );
  }
}

class Book{
  constructor(author, title, url){
    this.title = title;
    this.author = author;
    this.url = url;
    this.isRead = false;
    this.id = `id-${Date.now()}`;
  }
  createUI(){
    let tr = document.createElement('tr');
    let bookAuthor = document.createElement('td');
    let bookTitle = document.createElement('td');
    let bookUrl = document.createElement('td');
    let cross = document.createElement('td');
    cross.classList.add('delete');
    tr.append(bookTitle, bookAuthor, bookUrl, cross);
  }
}
let button = document.querySelector('button');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let url = document.querySelector('#url');
let myBooks = new BookList(document.querySelector('tbody'));
button.addEventListener('click', (event,title,author,url) => {
  myBooks.add(title, author, url);
});

/*
  <tr class="book-info">
    <td class="book-data">silver lining playbook</td>
    <td class="book-data">sam mendes</td>
    <td class="book-data">ISBN</td>
    <td class="book-data">X</td>
  </tr>
*/