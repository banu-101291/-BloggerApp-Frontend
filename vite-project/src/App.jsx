import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Home from './components/pages/Home';
import BlogList from './components/pages/BlogList';
import BlogPost from './components/pages/BlogPost';
import About from './components/pages/About';
import Navigation from './Navigation';
import PostForm from './components/PostForm';
import BlogForm from './components/BlogForm';
import SignUp from './components/pages/Signup';
import Login from './components/pages/LoginPage'
import Dashboard from './user/Dashboard';

function App() {
  return (
    <UserProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BlogPost" element={<BlogPost />} />
          <Route path="/BlogList" element={<BlogList />} />
          <Route path="/About" element={<About />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          {/* Protected routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/PostForm" element={<PostForm />} />
          <Route path="/Edit/:id" element={<BlogForm />} />
          <Route path="/BlogForm" element={<BlogForm />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
