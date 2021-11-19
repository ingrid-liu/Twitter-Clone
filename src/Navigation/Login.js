import React from "react";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
// import {Link} from 'react-router';

const Login = () => {
    return(
        <div>
            <Navigation/>

            <h3>Login</h3>
            Username: <input/><br/>
            Password: <input/><br/>
            <button>Login</button>
        </div>
    );
};

export default Login;