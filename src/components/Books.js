import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/Books';
import NoImage from './NoImage';
import './book.css';
function Books() {
  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {bookList.book.length === 0 ? (
        "You don't have any favorite books"
      ) : (
        <div className="books-container">
          {bookList.book.map((book) => (
            <div key={book.id} className="book-cell">
              <div className="book-img">
                {book.thumbnail ? (
                  <img src={book.thumbnail} className="book-photo" />
                ) : (
                  <NoImage />
                )}
              </div>
              <div className="book-content">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.authors}</div>
                <div className="book-author">{book.publishedDate}</div>
                <div className="book-sum">{book.description}</div>
                <button
                  className="button-9"
                  onClick={() => {
                    dispatch(deleteBook({ id: book.id }));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
