import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <br/>
            <Link to="/a6/hello">
                Back
            </Link> |
            <Link to="/a6/twitter">
                Build
            </Link>
        </>
    )
};

export default Practice;
