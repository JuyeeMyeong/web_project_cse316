import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Select } from '@mui/material';
//components
import Home from './components/Home';
import Instructions from './components/Instructions';
import Login from './components/Login';
import PreviousCourses from './components/PreviousCourses';
import SelectCourses from './components/SelectCourses';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/PreviousCourses" element={<PreviousCourses />} />
          <Route path="/SelectCourses" element={<SelectCourses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
