import React, { useState } from 'react';
import axios from 'axios';

import Book from '../components/Book';
function Search() {
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
          <Book
            id={book.id}
            title={book.volumeInfo?.title}
            publishedDate={book.volumeInfo?.publishedDate}
            authors={book.volumeInfo?.authors}
            thumbnail={book.volumeInfo?.imageLinks?.thumbnail}
            description={
              book.volumeInfo?.description?.length > 200
                ? `${book.volumeInfo?.description?.substring(0, 250)}...`
                : book.volumeInfo?.description
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
