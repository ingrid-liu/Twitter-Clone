import React from "react";
import {Link} from "react-router-dom";

const HelloWorld = () => {
    return(
        <>
            <h1>Hello World from A7</h1>
            <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/build">
                Build
            </Link>

        </>
    )
};

export default HelloWorld;
// <a href="/a6/practice">
//     Practice
// </a> |