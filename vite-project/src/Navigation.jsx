import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/BlogPost">Blog </Link> </li>
        <li><Link to="/BlogList">Blog List</Link></li>
       <li><Link to="/BlogForm">Create</Link></li>
      <li><Link to="/About">About</Link> </li>
       <li><Link to="/SignUp">Sign Up</Link></li>
        
       
      </ul>
    </nav>
  );
}

export default Navigation;
