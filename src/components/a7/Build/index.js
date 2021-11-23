import React from "react";
import {Link} from "react-router-dom";
// import NavigationSidebar from "./NavigationSidebar";
// import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
// import WhoToFollowList from "./WhoToFollowList";
import ExploreScreen from "./ExploreScreen";

const A6 = () => {
    return(
        <>
            <p>from A7</p>
            <ExploreScreen/>
            <br/>
            <Link to="/a7/hello">
                Back
            </Link> |
            <Link to="/a7/practice">
                Practice
            </Link>
        </>
    )
};

export default A6;
