import React from 'react';

import { useDispatch } from 'react-redux';
import { addBook } from '../redux/Books';

const Book = (props) => {
  const { id, title, publishedDate, description, authors, thumbnail } = props;
  const dispatch = useDispatch();
  const addToFavor = () => {
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
      <button className="fav" onClick={addToFavor}>
        Add to fav
      </button>
    </div>
  );
};

export default Book;
