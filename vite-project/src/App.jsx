import React from 'react';
import './App.css' ;
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Navigation from './Navigation';






function App() {


  return (
    
   <div>
  
    <Router>
      <Navigation/>
      <Switch>
   
        <Route path = "/" exact component={Home}></Route>
        <Route path = "/BlogPost" component={BlogPost}></Route>
        <Route path = "BlogList" component={BlogList}></Route>
        <Route path ="/About" component={About}></Route>
    </Switch>
     
    </Router>
   </div>
  )
}

export default App
