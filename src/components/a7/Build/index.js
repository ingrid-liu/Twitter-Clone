import React from "react";
import {Link, Route} from "react-router-dom";
// import NavigationSidebar from "./NavigationSidebar";
// import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
// import WhoToFollowList from "./WhoToFollowList";
import A7ExploreScreen from "./ExploreScreen";
import A7HomeScreen from "./HomeScreen";

const A7Build = () => {
    return(
        // <>
        //     <p>from A7</p>
        //     <ExploreScreen/>
        //     <br/>
        // </>
        <div>
            <Route path={["/", "/a7/twitter/home"]} exact={true} component={A7HomeScreen}/>
            <Route path="/a7/twitter/explore" exact={true} component={A7ExploreScreen}/>
        </div>

    )
};

export default A7Build;
