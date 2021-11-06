import './App.css';
import React, {useRef} from 'react';

function App() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value)

    inputRef.current.focus();

    inputRef.current.value = "";
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={onClick}>Change me</button>
    </div>
  )
}

export default App;
