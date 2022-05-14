import { useState } from 'react';
import './App.css';

import axios from 'axios';
import React from 'react';
function App() {
  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);

  const api2 = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.REACT_APP_API_KEY}&maxResults=40`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
    axios.get(api2).then((data) => {
      setResult(data.data.items);
      console.log(data);
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for books"
            onChange={(e) => {
              setBook(e.target.value);
            }}
          />
        </div>
        <button type="submit " className="btn">
          send
        </button>
      </form>

      <div>
        {result.map((book) => (
          <div>
            <p>{book.volumeInfo?.title}</p>
            <p>{book.volumeInfo?.publishedDate}</p>
            <p>{book.volumeInfo?.description}</p>
            <p>{book.volumeInfo?.authors}</p>
            <img src={book.volumeInfo?.imageLinks?.thumbnail} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
