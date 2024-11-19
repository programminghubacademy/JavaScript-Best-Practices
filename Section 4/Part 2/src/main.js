// src/main.js
import { displayBooks } from './components/books.js';

// Display Books
displayBooks();

// Lazy loading the authors module when required
document.getElementById('loadAuthors').addEventListener('click', async () => {
  const { displayAuthors } = await import('./components/authors.js');
  displayAuthors();
});

// Using Rollup-bundled BookLib.js (imagine this is pre-bundled by Rollup)
import { getBookTitle } from './libs/BookLib.js';
console.log('Fetching book title:', getBookTitle(0));