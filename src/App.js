import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//components
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
