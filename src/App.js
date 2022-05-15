import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Search from './components/Search';
import Books from './components/Books';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="es">
      <Navbar />

      <Routes>
        <Route path="/" element={<Search />} />
        <Route exact path="/fav" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
