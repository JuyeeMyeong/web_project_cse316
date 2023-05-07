import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

function Instructions() {

    return (
        <div>
            <h2 className='text-center'>CourseMan!</h2>
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

            <div className='instruction'>
                <p className='textShown'> Paragraph 1</p>
                <p className='textShown'> Paragraph 2</p>
                <p className='textShown'> Paragraph 3</p>
                <p className='textShown'> Paragraph 4</p>
            </div>


        </div>
    );
};

export default Instructions;