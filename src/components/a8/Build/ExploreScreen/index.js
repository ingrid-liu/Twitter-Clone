import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent.js";
import PostSummaryList from "../PostSummaryList";

const A8ExploreScreen = () => {
    return(
        <div className="container">
            <p>ExplorePage from A8</p>
            <div className="row mt-2 ">
                <div className="col-2 ">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-lg-6">
                    <ExploreComponent/>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <PostSummaryList/>
                </div>
            </div>
        </div>
    );
};
export default A8ExploreScreen;
