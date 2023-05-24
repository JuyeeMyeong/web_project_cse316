import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Home from "./components/Home";
import Instructions from "./components/Instructions";
import Login from "./components/Login";
import PreviousCourses from "./components/PreviousCourses";
import SelectCourses from "./components/SelectCourses";
//hooks
import useCookieUtil from "./hooks/useCookieUtil";

function App() {

//cookieUtil
  const {
    stuId,
    setStuId,
    isLoggedIn,
    handleLogin,
    handleLogout,
  } = useCookieUtil();

  /****
   * Routes -> Home / Instructions / Login / PreviousCourses / SelectCourses
   * 
   * *******/
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
