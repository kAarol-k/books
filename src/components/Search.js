import React, { useState } from 'react';
import axios from 'axios';
import './search.css';
import Book from '../components/Book';
import { useSelector } from 'react-redux';

function Search() {
  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  const api2 = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.REACT_APP_API_KEY}&maxResults=40`;
  const bookList = useSelector((state) => state.books);
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
      <div className="search">
        <div className="icon"></div>
        <div className="input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-bar"
              placeholder="Search for books"
              onChange={(e) => {
                setBook(e.target.value);
              }}
            />
          </form>
        </div>
      </div>

      <div>
        {result.map((book) => (
          <Book
            key={book.id}
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
            isFav={
              bookList.book.find((favbook) => {
                if (favbook.id == book.id) return true;
              })
                ? true
                : false
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
