import React from 'react';
import { NavLink } from 'react-router';





const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm lg:pl-[80px] lg:pr-[80px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 ">
                            <NavLink to='/'>
                                <li>
                                    <a className='text-transparent  bg-clip-text bg-gradient-to-r from-[#632EE3]  to-[#9F62F2]'>Home</a>
                                </li>
                            </NavLink>
                            <NavLink to='/app'>
                                <li>
                                    <a>Apps</a>
                                </li>
                            </NavLink >

                            <NavLink to='/Installation'>
                                <li>
                                    <a>Installation</a>
                                </li>
                            </NavLink>
                        </ul>
                    </div >
                    <div className='flex items-center'>
                        <NavLink to='/'>
                            <a className="text-xl flex items-center"><img className='w-[40px] h-[40px]' src="/logo.png" alt="logo.png" /> <span className='font-bold'>APP.IO</span></a>
                        </NavLink>
                    </div>

                </div>
                <div className="navbar-center font-bold hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to='/'>
                            <li>
                                <a className='text-transparent  bg-clip-text bg-gradient-to-r from-[#632EE3]  to-[#9F62F2]'>Home</a>
                            </li>
                        </NavLink>
                        <NavLink to='/app'>
                            <li>
                                <a>Apps</a>
                            </li>
                        </NavLink>
                        <NavLink to='/Installation'>
                            <li>
                                <a>Installation</a>
                            </li>
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a href="https://github.com/shakib-ahmmed/app-io" target="_blank" className="btn bg-gradient-to-r from-[#5a22df]  to-[#9557eb] text-white font-semibold w-[145px] h-[45px]"><span><img src="git.png" alt="git.png" /></span>Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;