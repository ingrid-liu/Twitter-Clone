import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/tweetService";


// [Consumer Component] get state.tweets from store in Build/index.js
// const selectAllTweets = (state) => state.tweets.tweets;          // given in assignment
const selectAllTweets = (state) => state.tweets;


const TweetList = () => {
    // Retrieve the tweets from the state in the store
    const tweets = useSelector(selectAllTweets);
    // console.log(tweets);

    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), [])

    return (
        <ul className="list-group">
            {

                // given in assignment

                // tweets.map((tweet) => {
                //     return <TweetListItem tweet={tweet}/>
                // })

                tweets.map(tweet =>
                    <TweetListItem tweet={tweet}/>
                )


            }
        </ul>
    )
};

export default TweetList;