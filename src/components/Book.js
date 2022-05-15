import React, { useState } from 'react';
import Heart from 'react-animated-heart';

import { useSelector, useDispatch } from 'react-redux';
import { addBook, deleteBook } from '../redux/Books';

const Book = (props) => {
  const { id, isFav, title, publishedDate, description, authors, thumbnail } =
    props;
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books);
  const [isClick, setClick] = useState(false);

  const addToFavor = () => {
    setClick(!isClick);
    dispatch(
      addBook({
        title: title,
        id: id,
      })
    );
  };

  return (
    <div key={id}>
      <p>{title}</p>
      <p>{publishedDate}</p>
      <p>{description}</p>
      <p>{authors}</p>
      <img src={thumbnail} />
      {isFav === true ? (
        <Heart
          className="fav"
          isClick={true}
          onClick={() => {
            dispatch(deleteBook({ id: id }));
            setClick(!isClick);
          }}
        />
      ) : (
        <Heart className="fav" isClick={false} onClick={addToFavor} />
      )}
    </div>
  );
};

export default Book;
