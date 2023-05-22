import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleNavExpand = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    const btnClass = isNavExpanded ? 'navBtn rotate' : 'navBtn';

    return (
        <div>
            <h2 className='text-center'>CourseMan!</h2>
            <div className="button-container">
                <button className={btnClass} onClick={handleNavExpand}> 
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>
            </div>
            <div className={ isNavExpanded ? "header-container navigation-menu expanded" : "header-container navigation-menu notExpanded"}>
                <ul className="header d-flex align-items-center">
                    <li className="navigator topnav text-center">
                        <NavLink to="/" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Home</NavLink>
                    </li>
                    <li className="navigator text-center">
                        <NavLink to="/Instructions" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Instructions</NavLink>
                    </li>
                    <li className="navigator text-center">
                        <NavLink to="/Login" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Login</NavLink>
                    </li>
                    <li className="navigator text-center">
                        <NavLink to="/PreviousCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>PreviousCourses</NavLink>
                    </li>
                    <li className="navigator text-center">
                        <NavLink to="/SelectCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>SelectCourses</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;