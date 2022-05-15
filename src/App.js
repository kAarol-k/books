import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Search from './components/Search';
import Books from './components/Books';
function App() {
  return (
    <div className="App">
      <Link to={'/'}>
        <button>home</button>
      </Link>
      <Link to={'/fav'}>
        <button>fav</button>
      </Link>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route exact path="/fav" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
