import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";

const A9HomeScreen = () => {
    return(
        <div className="container">
            <p>This is from a9</p>
            <div className="row mt-2">
                <div className="col-2 ">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-lg-6">
                    <WhatsHappening/>
                    <TweetList/>
                </div>
                <div className="col-4 d-none d-lg-block">
                    <PostSummaryList/>
                </div>
            </div>


        </div>
    );
};
export default A9HomeScreen;
