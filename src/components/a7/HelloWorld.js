import React from "react";
import {Link} from "react-router-dom";

const HelloA7 = () => {
    return(
        <>
            <hr/>
            <h2>A7</h2>
            <Link to="/a7/practice">
                Practice
            </Link> |
            <Link to="/a7/twitter/home">
                Build
            </Link> |
            <Link to="/a7/twitter/profile">
                Challenge
            </Link> |
            <Link to="/a7/hello">
                Collapse A7
            </Link>

        </>
    )
};

export default HelloA7;
