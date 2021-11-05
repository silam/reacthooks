import './App.css';
import React, {useState, useReducer} from 'react';

const App = () => {
  //let counter = 1;
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("SiLam");
  const [showText, setShowText] = useState(true);

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT" : 
        return {count: state.count + 1, showText: state.showText};
      case "toggleShowText" :
        return {count: state.count, showText: !state.showText};
      default:
        return state;
    };
  };

  const [state, dispatch] = useReducer(reducer, 
      {count: 0, showText: true});


  const Increment = () => {
    //counter = counter + 1;
    setCounter(counter + 1);
    console.log(counter);
  }

  let onChange= (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

  }



  // return <div> 
  //     {/* {counter} <button onClick={Increment}>Increment</button> */}
  //     <input placeholder="enter something..." onChange={onChange} />
  //     {inputValue}
  //     </div>

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={ ()=>{
        //setCounter(counter+1);
        //setShowText(!showText);
        dispatch({type: "INCREMENT"})
        dispatch( {type: "toggleShowText"})
      }}>
        Click Here
      </button>

      {state.showText && <p>This is a text</p>}
    </div>
  )
};


export default App;
