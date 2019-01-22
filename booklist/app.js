//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI() {}

// Add Book To list
UI.prototype.addBookList = function (book) {
  const list = document.getElementById("book-list");
  //create tr element
  const row = document.createElement("tr");
  //  insert cols
  row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td> 
<td><a href = "#" class= "delete">X</a></td>
`;
  list.appendChild(row);
};

// clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = '';
  document.getElementById("author").value = '';
  isbn = document.getElementById("isbn").value = '';
}

//Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addBookList(book);

  //clear fields
  ui.clearFields();

  e.preventDefault();
});