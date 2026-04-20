let books = [];

function showAddBook() {
  document.getElementById('content').innerHTML = `
    <h2>Add Book</h2>
    <form onsubmit="addBook(event)">
      <label>Title:</label>
      <input type="text" id="title" required />
      <label>Author:</label>
      <input type="text" id="author" required />
      <br />
      <button type="submit">Add Book</button>
    </form>
  `;
}

function addBook(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = { title, author, isAvailable: true };
  books.push(book);
  alert(`Book added: ${title} by ${author}`);
  showViewBooks();
}

function showViewBooks() {
  const list = books.map(book =>
    `<li>${book.title} by ${book.author} - ${book.isAvailable ? 'Available' : 'Not Available'}</li>`
  ).join('');
  document.getElementById('content').innerHTML = `
    <h2>View Books</h2>
    <ul>${list || '<li>No books found</li>'}</ul>
  `;
}

function showBorrowBook() {
  document.getElementById('content').innerHTML = `
    <h2>Borrow Book</h2>
    <form onsubmit="borrowBook(event)">
      <label>Title:</label>
      <input type="text" id="borrowTitle" required />
      <br />
      <button type="submit">Borrow Book</button>
    </form>
  `;
}

function borrowBook(event) {
  event.preventDefault();
  const title = document.getElementById('borrowTitle').value;
  const book = books.find(b => b.title.toLowerCase() === title.toLowerCase());
  if (book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      alert(`You have borrowed: ${book.title}`);
    } else {
      alert('Book is already borrowed.');
    }
  } else {
    alert('Book not found.');
  }
  showViewBooks();
}

function showReturnBook() {
  document.getElementById('content').innerHTML = `
    <h2>Return Book</h2>
    <form onsubmit="returnBook(event)">
      <label>Title:</label>
      <input type="text" id="returnTitle" required />
      <br />
      <button type="submit">Return Book</button>
    </form>
  `;
}

function returnBook(event) {
  event.preventDefault();
  const title = document.getElementById('returnTitle').value;
  const book = books.find(b => b.title.toLowerCase() === title.toLowerCase());
  if (book) {
    if (!book.isAvailable) {
      book.isAvailable = true;
      alert(`You have returned: ${book.title}`);
    } else {
      alert('Book was not borrowed.');
    }
  } else {
    alert('Book not found.');
  }
  showViewBooks();
}
