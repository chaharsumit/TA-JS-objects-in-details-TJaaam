class BookList{
  constructor(root, list = []){
    this.books = list;
    this.root = root;
  }
  add(name, author, url){
    let book = new Book(name, author, url);
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
    this.root.innerHTML = '';
    this.books.forEach((book) => {
      let tr = document.createElement('tr');
      tr.setAttribute('class', 'book-info');
      let bookAuthor = document.createElement('td');
      bookAuthor.innerHTML = book.author;
      let bookTitle = document.createElement('td');
      bookTitle.innerHTML = book.title;
      let bookUrl = document.createElement('td');
      bookUrl.innerHTML = book.url;
      let cross = document.createElement('td');
      cross.innerHTML = 'X';
      tr.append(bookTitle, bookAuthor, bookUrl, cross);
      this.root.append(tr);
    });
  }
}

class Book{
  constructor(name, author, url){
    this.isRead = false;
    this.name = name;
    this.author = author;
    this.url = url;
    this.id = `id-${Data.now()}`;
  }
}

let root = document.querySelector('tbody');
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
<table>
        <thead>
          <tr>
            <th>title</th>
            <th>author</th>
            <th>isbn#</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="table-body">
          <!--<tr class="book-info">
            <td class="book-data">silver lining playbook</td>
            <td class="book-data">sam mendes</td>
            <td class="book-data">ISBN</td>
            <td class="book-data">X</td>
          </tr>-->
        </tbody>
      </table>


    User can add a new book by adding the name, author and url of the image
    Once added the book will be marked not read
    You can change the state of the book to Read and it will be marked as completed
    User can delete the book

*/