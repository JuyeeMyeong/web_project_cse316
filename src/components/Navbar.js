import '../App.css';
import React, { useState }  from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

/********    is Nav Expanded?   ***********/
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const handleNavExpand = () => {
        setIsNavExpanded(!isNavExpanded);
    };
    const btnClass = isNavExpanded ? 'navBtn rotate' : 'navBtn';

/********    Return   ***********/
    return (
        <div>
            {/*     CourseMan Header     */}
            <h2 className='text-center'>CourseMan!</h2>

            {/*     Hamburger button when width < 40em     */}
            <div className="button-container">
                <button className={btnClass} onClick={handleNavExpand}> 
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>
            </div>

            {/*     expanded menu when width > 40em     */}
            <div className={ isNavExpanded ? "header-container navigation-menu expanded" : "header-container navigation-menu notExpanded"}>
                <ul className="header d-flex align-items-center">
                    {/*     NavLink to Home     */}
                    <li className="navigator topnav text-center">
                        <NavLink to="/" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Home</NavLink>
                    </li>

                    {/*     NavLink to Instructions     */}
                    <li className="navigator text-center">
                        <NavLink to="/Instructions" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Instructions</NavLink>
                    </li>

                    {/*     NavLink to Login Page     */}
                    <li className="navigator text-center">
                        <NavLink to="/Login" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>Login</NavLink>
                    </li>

                    {/*     NavLink to PreviousCourses     */}
                    <li className="navigator text-center">
                        <NavLink to="/PreviousCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>PreviousCourses</NavLink>
                    </li>

                    {/*     NavLink to SelectCourses     */}
                    <li className="navigator text-center">
                        <NavLink to="/SelectCourses" className={({isActive}) => (isActive? "activeNav" : "defaultNav")} style={{ textDecoration: "none" }}>SelectCourses</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;