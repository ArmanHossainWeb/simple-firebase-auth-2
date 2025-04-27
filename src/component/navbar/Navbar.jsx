import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <NavLink className={({isActive})=>`rounded-md p-1 ${isActive? "bg-green-200 p-1 rounded-md" : ""}`} to="/">Home</NavLink>
            <NavLink className={({isActive})=>`rounded-md p-1 ${isActive? "bg-green-200 p-1 rounded-md" : ""}`}  to="/login">login</NavLink>
        </div>
    );
};

export default Navbar;