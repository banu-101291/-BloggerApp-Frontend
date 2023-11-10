import React from 'react';
import Header from './Header';
import Button from './Button';



function Info() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Header title="My Blog App" />
      <Button onClick={handleClick} label="Click Me" />
    </div>
  );
}


export default Info;