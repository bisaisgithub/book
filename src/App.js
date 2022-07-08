import book1 from "./books/sample_book 1.txt";
import book2 from "./books/sample_book 2.txt";
import Book from "./book/Book.jsx";
import { useState } from "react";


function App() {
  const [book, setBook] =useState({
    title: '',
    text: ''
  });
  const getBook = (bookText, title)=>{
    fetch(bookText)
    .then(r => r.text())
    .then(text => {
      setBook({
        title,
        text
      })
    });
  }
  return (
    <div className="App">
      {
        book.title === ''? (<h3>Click the book to render</h3>) : ''
      }
      <button onClick={()=>{getBook(book1, 'Book 1')}}>Book 1</button>
      <button onClick={()=>{getBook(book2, 'Book 2')}}>Book 2</button>
      <Book book={book}/>
    </div>
  );
}

export default App;
