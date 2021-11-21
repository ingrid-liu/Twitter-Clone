import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
// import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import ExploreScreen from "./ExploreScreen";

const Build = () => {
    return(
        <>
            <h3>A6 Build</h3>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowList/>*/}
            <ExploreScreen/>,

            <Link to="/a6/hello">
                Back
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
        </>
    )
};

export default Build;
