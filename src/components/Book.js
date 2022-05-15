import React, { useState } from 'react';
import Heart from 'react-animated-heart';
import './book.css';
import { useDispatch } from 'react-redux';
import { addBook, deleteBook } from '../redux/Books';
import NoImage from './NoImage';

const Book = (props) => {
  const { id, isFav, title, publishedDate, description, authors, thumbnail } =
    props;
  const dispatch = useDispatch();
  const [isClick, setClick] = useState(false);

  const addToFavor = () => {
    setClick(!isClick);
    dispatch(
      addBook({
        title: title,
        id: id,
        publishedDate: publishedDate,
        description: description,
        authors: authors,
        thumbnail: thumbnail,
      })
    );
  };

  return (
    <>
      <div className="book-cell">
        <div className="book-img">
          {thumbnail ? (
            <img src={thumbnail} className="book-photo" />
          ) : (
            <NoImage />
          )}
        </div>
        <div className="book-content">
          <div className="book-title">{title}</div>
          <div className="book-author">{authors}</div>
          <div className="book-author">{publishedDate}</div>
          <div className="book-sum">{description}</div>
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
      </div>
    </>
  );
};

export default Book;
