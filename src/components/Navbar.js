import '../App.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    
    const buttonSytle = () => {
        if (!isNavExpanded) {
            return "Menu";
        } else {
            return "&times";
        }
    };

    const handleNavExpand = () => {
        setIsNavExpanded(!isNavExpanded);
    };

    useEffect(() => {
        window.addEventListener('resize', handleNavExpand);

        return () => {
            window.removeEventListener('resize', handleNavExpand);
        };
    }, []);

    return (
        <div>
            <h2 className='text-center'>CourseMan!</h2>
            <div className="button-container">
                <button className="navBtn" onClick={handleNavExpand}> 
                    Menu
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