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
    this.root.innerHTML = "";
    this.books.forEach((book) => {
        let tr = document.createElement('tr');
        let bookAuthor = document.createElement('td');
        bookAuthor.innerHTML = book.author;
        let bookTitle = document.createElement('td');
        bookTitle.innerHTML = book.title;
        let bookUrl = document.createElement('td');
        bookUrl.innerHTML = book.url;
        let cross = document.createElement('td');
        cross.setAttribute('id', 'delete');
        cross.innerHTML = 'X';
        cross.addEventListener('click', this.delete.bind(this, this.id));
        tr.append(bookTitle, bookAuthor, bookUrl, cross);
        this.root.append(tr);
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
}
let button = document.querySelector('button');
let form = document.querySelector('form');
let titleelm = document.querySelector('#title');
let authorelm = document.querySelector('#author');
let urlelm = document.querySelector('#isbn');
let myBooks = new BookList(document.querySelector('tbody'));

function handleSubmit(event){
  event.preventDefault();
  const title = titleelm.value;
  const author = authorelm.value;
  const url = urlelm.value;
  myBooks.add(title, author, url);
  titleelm.value = '';
  authorelm.value = '';
  urlelm.value = '';
}

form.addEventListener('submit', handleSubmit);

/*
  <tr class="book-info">
    <td class="book-data">silver lining playbook</td>
    <td class="book-data">sam mendes</td>
    <td class="book-data">ISBN</td>
    <td class="book-data">X</td>
  </tr>
*/