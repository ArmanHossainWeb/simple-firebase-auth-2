import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/navbar/Navbar';

const Root = () => {
    return (
        <div className='w-1/3 mx-auto mt-20'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;