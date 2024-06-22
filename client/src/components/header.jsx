import React ,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';



const Header = () =>{

    return (

        <header>
            <nav className = "fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
                
                <h3 className = "relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 md-5 mt-5">
                    <span className="logo">
                        <img src ="" alt = "NewsMania"/>
                    </span>
                
                
                </h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </header>

    );


};

export default Header;