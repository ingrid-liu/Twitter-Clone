import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <>
            <p>from A7</p>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <br/>
            <Link to="/a7/hello">
                Back
            </Link> |
            <Link to="/a7/twitter">
                Build
            </Link>
        </>
    )
};

export default Practice;
