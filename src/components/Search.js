import React, { useState } from 'react';
import axios from 'axios';
import './search.css';
import Book from '../components/Book';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
function Search() {
  const [book, setBook] = useState('');
  const [result, setResult] = useState([]);
  const api2 = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.REACT_APP_API_KEY}&maxResults=10`;
  const bookList = useSelector((state) => state.books);

  const fetchData = () => {
    axios.get(api2).then((data) => {
      setResult(data.data.items);
    });
  };
  const fetchMoreData = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.REACT_APP_API_KEY}&maxResults=40`
      )
      .then((data) => {
        setResult(data.data.items);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
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
              placeholder="Search"
              onChange={(e) => {
                setBook(e.target.value);
              }}
            />
          </form>
        </div>
      </div>

      <div className="books-container">
        {result.length !== 0 ? (
          <InfiniteScroll
            dataLength={result.length}
            next={fetchMoreData}
            hasMore={true}
          >
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
                    if (favbook.id === book.id) return true;
                  })
                    ? true
                    : false
                }
              />
            ))}
          </InfiniteScroll>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Search;
