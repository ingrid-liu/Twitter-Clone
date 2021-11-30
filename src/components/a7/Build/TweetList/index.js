import React from "react";
import tweets from "./tweets.json";
import TweetListItem from "./TweetListItem";


// import {useSelector} from "react-redux";
// import WhatsHappening from "../WhatsHappening";


// [Consumer Component] get state.tweets from store in Build/index.js
// const selectAllTweets = (state) => state.tweets.tweets;


const TweetList = () => {
    // const tweets = useSelector(selectAllTweets);
    // console.log(tweets);
    return(
            <ul className="list-group">
                {
                    tweets.map(tweet =>
                        <TweetListItem tweet={tweet}/>
                    )
                }
            </ul>

        // <ul className="list-group">
        // {
        //     tweets.map(tweet =>
        //         <TweetListItem tweet={tweet}/>
        //     )
        // }
        // </ul>


    );
}

export default TweetList;



