import React from "react";
import {Link} from "react-router-dom";
import  './Navigation.css';




const Navigation =() => {
    return(
        <nav className="bg-gray-800 py-4 fixed w-full top-0">
             <div className="container mx-auto flex justify-between items-center">
             <ul className="flex space-x-4">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to = "/BlogPost" className="text-gray-300 hover:text-white">Post</Link></li>
                <li><Link to = "/BlogList" className="text-gray-300 hover:text-white">BlogList</Link></li>
                <li><Link to ="/About" className="text-gray-300 hover:text-white">About</Link></li>
            </ul>
            </div>
        </nav>
    )
}


export default Navigation;