import React, { useContext } from "react";
import {AppContext} from "./UseContext";


function Login() {
    const {setUserName} = useContext(AppContext);

    return (
        <div>
            <input onChange={(event) => {
                setUserName(event.target.value);
            }}
            />
        </div>
    )
}

export default Login;