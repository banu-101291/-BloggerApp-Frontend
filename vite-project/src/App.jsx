import React from 'react';
import './App.css' ;
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import BlogList from './components/pages/BlogList';
import BlogPost from './components/pages/BlogPost';
import About from './components/pages/About';
import Navigation from './Navigation';
import BlogEditor from './components/BlogEditor';



function App() {

  return (
    
   <div>
      <Router>
      <Navigation/>
      <Switch>
   
        <Route path = "/" exact component={Home}></Route>
        <Route path = "/BlogPost" component={BlogPost}></Route>
        <Route path = "/BlogList" component={BlogList}></Route>
        <Route path ="/About" component={About}></Route>
        <Route path = "/BlogEditor" component={BlogEditor}></Route>
    </Switch>
     
    </Router>
   </div>
  
  )
}

export default App
