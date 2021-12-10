import React from "react";
// import tweets from "../../../../reducers/data/tweets.json";
import {useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
// import WhatsHappening from "../WhatsHappening";


// [Consumer Component] get state.tweets from store in Build/index.js
// const selectAllTweets = (state) => state.tweets.tweets;
const selectAllTweets = (state) => state.tweets;


const TweetList = () => {
    // Retrieve the tweets from the state in the store
    const tweets = useSelector(selectAllTweets);
    // console.log(tweets);
    return(
            <ul className="list-group">
                {
                    tweets.map((tweet) => {
                        return <TweetListItem tweet={tweet}/>
                    })
                }
            </ul>
    );
}

export default TweetList;



