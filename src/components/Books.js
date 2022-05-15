import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/Books';

function Books() {
  const bookList = useSelector((state) => state.books);
  console.log(bookList.book);
  const dispatch = useDispatch();

  return (
    <>
      {bookList.book.map((book) => (
        <div>
          <h1>{book.title}</h1>
          <button
            className="remove"
            onClick={() => {
              dispatch(deleteBook({ id: book.id }));
            }}
          >
            Add to fav
          </button>
        </div>
      ))}
    </>
  );
}

export default Books;
