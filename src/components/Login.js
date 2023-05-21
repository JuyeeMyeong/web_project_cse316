import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

function Login() {


    return (
        <div>
            <h2 className='text-center'>CourseMan!</h2>
            <div className='header-container'>
                <header className="header d-flex justify-content-end">
                    <h1>
                        <NavLink to="/" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Home</NavLink>
                    </h1>
                    <h1>
                        <NavLink to="/Instructions" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Instructions</NavLink>
                    </h1>
                    <h1>
                        <NavLink to="/Login" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Login</NavLink>
                    </h1>
                    <h1>
                        <NavLink to="/PreviousCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>PreviousCourses</NavLink>
                    </h1>
                    <h1>
                        <NavLink to="/SelectCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>SelectCourses</NavLink>
                    </h1>
                </header>
            </div>

            <div className='LoginPage'>
                <p className='login_title'>Login Form</p>
                <div className='loginform d-flex justify-content-around'>
                    <label id="ID"for="" className="idpw">ID:</label>
                    <input type="text" name="user" id="" placeholder='Student ID...'></input>
                    <div></div>
                </div>
                <div className='loginform d-flex justify-content-around'>
                    <label id="PW" for="" className="idpw">Password:</label>
                    <input type="text" name="password" id="" placeholder='Password...'></input>
                    <div></div>
                </div>
                <div className='text-center'>
                    <button id="Loginbtn" type="button" form="">Login</button>
                </div>
            </div>


        </div>
    );
};

export default Login;