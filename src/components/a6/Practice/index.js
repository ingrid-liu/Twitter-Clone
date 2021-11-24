import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";

const A6Practice = () => {
    return(
        <>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <br/>
            {/*<Link to="/a6/hello">*/}
            {/*    Back*/}
            {/*</Link> |*/}
            {/*<Link to="/a6/twitter/explore">*/}
            {/*    Build*/}
            {/*</Link> |*/}
            {/*<Link to="/a7/twitter/home">*/}
            {/*    Challenge*/}
            {/*</Link>*/}
        </>
    )
};

export default A6Practice;
