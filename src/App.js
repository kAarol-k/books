import { useState } from 'react';
import './App.css';

import axios from 'axios';
import React from 'react';
function App() {
  const [book, setBook] = useState('');
  const [resoult, setResoult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(book);
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
    </div>
  );
}

export default App;
