import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from 'react-cookie';
//components
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Login from "./components/Login";
import PreviousCourses from "./components/PreviousCourses";
import SelectCourses from "./components/SelectCourses";
//utils
import cookieUtil from "./utils/cookieUtil";

function App() {
  const {
    stuId, setStuId, isLoggedIn, setIsLoggedIn, cookies, handleLogin, handleLogout
  } = cookieUtil ();

  const fetchLoggedInStatus = async () => {
    if (cookies.isLoggedIn) {
      setIsLoggedIn(true);
      setStuId(cookies.stuId);
    } else {
      setIsLoggedIn(false);
      setStuId('');
    }
  };

  useEffect(() => {
    fetchLoggedInStatus();
  }, [cookies]);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Instructions" element={<Instructions />} />
          <Route
            path="/Login"
            element={
              <Login
                stuId={stuId}
                setStuId={setStuId}
                isLoggedIn={isLoggedIn}
                onLogin={handleLogin}
                onLogout={handleLogout}
              />
            }
          />
          <Route path="/PreviousCourses" element={<PreviousCourses />} />
          <Route path="/SelectCourses" element={<SelectCourses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;