# Codes for useCallback in React

const returnComment = useCallback(
        (name) => {
            return data + name;
        },
        [data]
    );
    

# Codes for useMemo in React

const getLongestName = useMemo(() => findLongestName(data), [toggle]);

# Codes for usecontext in React

- Create a context
export const AppContext = createContext(null);

- then use provider from context and passing array variables into the child components
<AppContext.Provider value={{ username, setUserName }}>
          <Login /> <User />
</AppContext.Provider>

# Codes for ussing useImperativHandle
 - when you want parent button onclick to CALL a function in child component
 - import forwardRef and useImperativeHandle in the child
 - Define in Child

 useImperativeHandle(ref, ()=> ({
        alterToggle() {
            setToggle(!toggle);
        },
    }));

- In the parent component:
 Pass ref to child component
 then call the child function from the Ref

 <button onClick={()=>
      {
        buttonRef.current.alterToggle();

      }}>Button from Parent</button>
      <Button ref={buttonRef}></Button>


# codes for using useLayoutEffect

- import useLayoutEffect from react
- create functions for useLayoutEffect


 // useLayouteffect called first before anything else is rendered
  useLayoutEffect(() => {
    console.log(inputRef.current.value);

    
  }, []);

  // useEffect is called after anything else is rendered
  useEffect(() => {
    inputRef.current.value = "Hello"
  }, []);


# codes for using useRef

- import useRef from react

- Call useRef 
    const inputRef = useRef(null);

- Reference useRef variable in Document

 <input ref={inputRef} />

 - use the current reference by specifying 
    ref.current.value



# codes for using useEffect
- Import useEffect from react;

- Define useEffect function to pull data from the internet

useEffect(() => {
     axios.get("https://jsonplaceholder.typicode.com/comments")
       .then((response) => 
       {
           setData(response.data[0].email);
           console.log("API Called");
       })
   }, []); // [] make call useEffect once

- On the onclick function, 
   <button onClick={() => {

       setCount(count + 1);

     }}>
      
# codes for Reach Hooks using useReducer
What you need to do is:


- Import useReducer

import React, {useReducer} from 'react';

- create state and dispatch from useReducer

const [state, dispatch] = useReducer(reducer, 
      {count: 0, showText: true});
      
- Create a reducer function, passing state and action
Depends on the type of action, we return diffrent state

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
  
- Calling dispatch in return
- <button onClick={ ()=>{
        
        dispatch({type: "INCREMENT"})
        dispatch( {type: "toggleShowText"})
      }}>
      
      
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
