import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Login({ stuId, setStuId, onLogin, isLoggedIn, onLogout }) {
  //password string
  const [password, setPassword] = useState("");

  //useNavigate
  const navigate = useNavigate();

  // login button
  const handleSubmit = async () => {
    //check student id is 9 digits
    if (stuId.length !== 9) {
      alert("Invalid ID");
      return;
    } else {
      // handlLogin in cookieUtil (return true, success)
      const success = await onLogin(stuId, password);

      if (success) {
        navigate("/"); //go to Home page
      } else {
        alert("Login failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <Navbar header={"CourseMan!"} navColor={"blurred"} textColor={"white"} />

      {/*********
       *    IF the user's logged in, there is logout Button
       *    Otherwise, login page
       * ********/}
      {isLoggedIn ? (
        <div className="text-center">
          {/* Logout Button */}
          <button id="Logoutbtn" type="button" form="" onClick={onLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="LoginPage">
          {/* Login form code */}
          <p className="login_title">Login Form</p>
          <div className="loginform d-flex justify-content-around">
            {/* ID */}
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
            {/* Password */}
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
            {/* Login Button */}
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
