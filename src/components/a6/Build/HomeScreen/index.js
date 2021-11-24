import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";
import {Link} from "react-router-dom";

const A6HomeScreen = () => {
    return(
        <div className="container">
            <div className="row mt-2">
                {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
                <div className="col-2 ">
                    <NavigationSidebar active="home"/>
                </div>
                {/*<div className="col-10 col-md-10 col-lg-7 col-xl-6"*/}
                {/*     style={{"position": "relative"}}>*/}
                <div className="col-10 col-lg-6">
                    <PostList/>
                </div>
                {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
                <div className="col-4 d-none d-lg-block">
                    <PostSummaryList/>
                </div>
            </div>

            <br/>
            {/*<Link to="/a6/hello">*/}
            {/*    Back*/}
            {/*</Link> |*/}
            {/*<Link to="/a7/practice">*/}
            {/*    Practice*/}
            {/*</Link> |*/}
            {/*<Link to="a6/twitter/explore">*/}
            {/*    Build*/}
            {/*</Link>*/}
        </div>
    );
};
export default A6HomeScreen;
