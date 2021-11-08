import './App.css';
import React, {useRef} from 'react';
import Button from './Button';

function App() {
  


  const buttonRef = useRef(null);

  return (
    <div>
      <button onClick={()=>
      {
        buttonRef.current.alterToggle();

      }}>Button from Parent</button>
      <Button ref={buttonRef}></Button>
    </div>
  )
}

export default App;
