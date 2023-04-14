import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <div className='text-primary d-flex justify-content-between align-item-canter p-3'>
            <h1>My <span className='text-danger'>Dream</span></h1>
            <div className='d-flex gap-5 '>
                <Link className='text-decoration-none' to='/'>Home</Link>
                <Link className='text-decoration-none' to="/login">LogIn</Link>
                <Link className='text-decoration-none' to="/register">SignUp</Link>
                
            </div>
        </div>
        <Outlet></Outlet>
        </div>
    );
};

export default Header;