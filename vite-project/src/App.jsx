import { useState } from 'react'
import './App.css' ;
import Info from './components/Info';




function App() {
  const [count, setCount] = useState(0)

  return (
    
   <div>
  
    <Info>BlogApp</Info>
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="mb-5 text-5xl font-bold">
        Welcome to{" "}
        
      </h1>
      <p>
      BloggerApp is a simple blog application that allows users to
        effortlessly share their stories and connect with their audience.
      </p>
    </div>
   </div>
  )
}

export default App
