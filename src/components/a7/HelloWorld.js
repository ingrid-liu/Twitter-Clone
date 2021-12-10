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
                &nbsp;Build (HomeScreen)
            </Link> |
            <Link to="/a7/twitter/profile">
                &nbsp;Challenge (ProfileScreen)
            </Link> |
            <Link to="/">
                &nbsp;Collapse A7
            </Link>

        </>
    )
};

export default HelloA7;
