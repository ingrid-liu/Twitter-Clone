import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList";
import ExploreComponent from "../ExploreScreen/ExploreComponent";

const A7HomeScreen = () => {
    return(
        <div className="container">
            <p>HomePage from A7</p>
            <div className="row mt-2">
                <div className="col-2 ">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-lg-6">
                    <PostList/>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <PostSummaryList/>
                </div>
            </div>
        </div>
    );
};
export default A7HomeScreen;
