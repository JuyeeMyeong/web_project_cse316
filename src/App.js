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

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['isLoggedIn']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stuId, setStuId] = useState("");

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

  const handleLogin = (stuId, password) => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        stuId: stuId,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Success") {
          setStuId(stuId);
          setCookie('isLoggedIn', true, { path: '/' });
          setCookie('stuId', stuId, { path: '/' });
          setIsLoggedIn(true);
        } else {
          throw new Error("Login failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


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