import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

function Home() {

    return (
        <div>
            <h2 className='text-center'>CourseMan!</h2>
            <div className='header-container'>
                <header className="header d-flex justify-content-end align-items-center">
                    <h1 className="navigator text-center">
                        <NavLink to="/" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Home</NavLink>
                    </h1>
                    <h1 className="navigator text-center">
                        <NavLink to="/Instructions" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Instructions</NavLink>
                    </h1>
                    <h1 className="navigator text-center">
                        <NavLink to="/Login" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Login</NavLink>
                    </h1>
                    <h1 className="navigator text-center">
                        <NavLink to="/PreviousCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>PreviousCourses</NavLink>
                    </h1>
                    <h1 className="navigator text-center">
                        <NavLink to="/SelectCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>SelectCourses</NavLink>
                    </h1>
                </header>
            </div>




        </div>
    );
};

export default Home;