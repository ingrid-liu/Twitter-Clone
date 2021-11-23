import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <>
            <h4>---- A6 Practice ----</h4>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <br/>
            <Link to="/a6/hello">
                Back
            </Link> |
            <Link to="/a6/build">
                Build
            </Link>
        </>
    )
};

export default Practice;
