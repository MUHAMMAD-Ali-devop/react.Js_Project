import React, { useState } from "react";
// import { Landing_page } from './Landing_page.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const Navbar = () => {
    const list_style = 'text-base font-medium hover:border-b-2 hover:border-blue-600 hover:text-blue-600 hover:cursor-pointer';
    const toggle_List = 'py-2 border-b-2 border-black rounded-lg w-full text-center hover:cursor-pointer text-black';
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="flex px-16 h-20 bg-white items-center fixed top-0 left-0 right-0 z-20 ">
                <div className="w-2/5 flex items-center"><p className="text-3xl font-semibold font-sans tracking-wide">BizLand<span className="text-blue-600">.</span></p></div>
                <div className="w-3/5 flex items-center lg:visible invisible">
                    <ul className="flex w-4/5 ml-auto justify-evenly ">
                        <Link to={'/'}><li className={list_style}>Home</li></Link>
                        <Link to={'/About'}><li className={list_style}>About</li></Link>
                        <Link to={'/Services'}><li className={list_style}>Services</li></Link>
                        <Link to={'/Portfolio'}><li className={list_style}>Portfolio</li></Link>
                        <Link to={'/Team'}><li className={list_style}>Team</li></Link>
                        <Link to={'/ContactUs'}><li className={list_style}>Contact</li></Link>
                    </ul>
                </div>
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon className="text-2xl text-blue-700 cursor-pointer" icon={isOpen ? faXmark : faBars} />
                </div>
            </div>
            <div className={`rounded-xl mt-4 bg-blue-300 absolute left-0 top-16 right-0 z-10 ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col rounded-xl">
               <Link to={'/'}>     <li className={toggle_List}>Home</li></Link>
                <Link to={'/About'}>    <li className={toggle_List}>About</li></Link>
                   <Link to={'/Services'}> <li className={toggle_List}>Services</li></Link>
                    <Link to={'/Portfolio'}><li className={toggle_List}>Portfolio</li></Link>
               <Link to={'/Team'}>     <li className={toggle_List}>Team</li></Link>
                  <Link to={'/ContactUs'}>  <li className={toggle_List}>Contact</li></Link>
                </ul>
            </div>
        </>
    );
}