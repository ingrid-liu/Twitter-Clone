import React from "react";
import {Link} from "react-router-dom";

const HelloA8 = () => {
    return(
        <>
            <hr/>
            <h2>A8</h2>
            <Link to="/a8/practice">
                Practice
            </Link> |
            <Link to="/a8/twitter/home">
                &nbsp;Build (HomeScreen)
            </Link> |
            <Link to="/a8/twitter/profile">
                &nbsp;Challenge (ProfileScreen)
            </Link> |
            <Link to="/">
                &nbsp;Collapse A8
            </Link>

        </>
    )
};

export default HelloA8;
