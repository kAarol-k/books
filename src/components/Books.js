import React from 'react';
import { useSelector } from 'react-redux';
function Books() {
  const bookList = useSelector((state) => state.books);
  console.log(bookList.book);
  return (
    <>
      {bookList.book.map((book) => (
        <h1>{book.title}</h1>
      ))}
    </>
  );
}

export default Books;
