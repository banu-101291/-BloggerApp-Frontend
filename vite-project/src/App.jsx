import React from 'react';
import './App.css' ;
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import BlogList from './components/pages/BlogList';
import BlogPost from './components/pages/BlogPost';
import About from './components/pages/About';
import Login from './components/pages/LoginPage';
import Navigation from './Navigation';
import PostForm from './components/PostForm';
import BlogForm from './components/BlogForm';
import LoginPage from './components/pages/LoginPage';



function App() {

  return (
    
   <div>
      <Router>
      <Navigation/>npm run dev
      <Switch>
   
        <Route path = "/" exact component={Home}></Route>
        <Route path = "/BlogPost" component={BlogPost}></Route>
        <Route path = "/BlogList" component={BlogList}></Route>
        <Route path ="/About" component={About}></Route>
        <Route path = '/LoginPage' component={LoginPage}></Route>
        <Route path = "/PostForm" component={PostForm}></Route>
        <Route path = "/Edit/:id" components = {BlogForm}></Route>
    </Switch>
     
    </Router>
   </div>
  
  )
}

export default App
