import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent.js";

const A6ExploreScreen = () => {
    return(
        <div className="container">
            <div className="row mt-2 ">
                {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
                <div className="col-2 ">
                    <NavigationSidebar active="explore"/>
                </div>
                {/*<div className="col-10 col-md-10 col-lg-7 col-xl-6"*/}
                {/*     style={{"position": "relative"}}>*/}
                <div className="col-10 col-lg-6">
                    <ExploreComponent/>
                </div>
                {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
                <div className="col-4 d-none d-lg-block">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    );
};
export default A6ExploreScreen;
