import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

function Instructions() {

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

            <div className='instruction'>
                <p className='textShown text-center'>First, proceed to 'Login' page and enter your 9 digit student id and your password. Click the 'Login' button to verify your password and save your student id for the session.</p>
                <p className='textShown text-center'>Next, proceed to 'Enter Previous Courses'. Click on each course you have completed with a C or better grade. Click Set Previous Courses.</p>
                <p className='textShown text-center'>Return to the home page and click 'Select Courses'. Enter your name and any search term to restrict course selections with the provided string in the course name. This can be left blank to see all CSE courses.</p>
                <p className='textShown text-center'>Click the checkbox by each course for which you would like to register. Click the Register button to register. If you are missing prerequisites, you must go back and select a different set of courses. In this case, click 'ok' on the alert box and try again.</p>
                <p className='textShown text-center'>On success, an alert box will indicate the coures for which you have registered.</p>
            </div>


        </div>
    );
};

export default Instructions;