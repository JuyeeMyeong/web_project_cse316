import "../App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Login({ stuId, setStuId, onLogin, isLoggedIn }) {
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (stuId.length !== 9) {
      alert("Invalid ID");
      return;
    } else {
      onLogin(stuId, password);
    }
  };

  return (
    <div>
      <Navbar />
      {isLoggedIn ? (
        <div className="text-center">
          <button id="Logoutbtn" type="button" form="">
            Logout
          </button>
        </div>
      ) : (
        <div className="LoginPage">
          {/* Login form code */}
          <p className="login_title">Login Form</p>
          <div className="loginform d-flex justify-content-around">
            <label id="ID" htmlFor="" className="idpw">
              ID:
            </label>
            <input
              type="text"
              name="user"
              id=""
              placeholder="Student ID..."
              onChange={(e) => setStuId(e.target.value)}
            ></input>
            <div></div>
          </div>
          <div className="loginform d-flex justify-content-around">
            <label id="PW" htmlFor="" className="idpw">
              Password:
            </label>
            <input
              type="text"
              name="password"
              id=""
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div></div>
          </div>
          <div className="text-center">
            <button id="Loginbtn" type="button" form="" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
