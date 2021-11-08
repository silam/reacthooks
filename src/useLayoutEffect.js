import './App.css';
import React, {useRef, useLayoutEffect, useEffect} from 'react';

function App() {
  const inputRef = useRef(null);

  // useLayouteffect called first before anything else is rendered
  useLayoutEffect(() => {
    console.log(inputRef.current.value);

    
  }, []);

  // useEffect is called after anything else is rendered
  useEffect(() => {
    inputRef.current.value = "Hello"
  }, []);




  return (
    <div>
      <input ref={inputRef} value="Si Lam" />
    </div>
  )
}

export default App;
