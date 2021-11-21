import React from "react";
import {Link} from "react-router-dom";

const Build = () => {
    return(
        <>
            <h1>Build from a6</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
        </>
    )
};

export default Build;
