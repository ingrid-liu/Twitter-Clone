import React, {useEffect, useState} from "react";
import service from '../../services/tweetService'
import TweetListItem from "./TweetListItem";

import {useDispatch, useSelector} from "react-redux";
import {findAllTweets} from "./service";


// [Consumer Component] get state.tweets from store in Build/index.js
// const selectAllTweets = (state) => state.tweets.tweets;          // given in assignment
const selectAllTweets = (state) => state.tweets;


const TweetList = () => {
    // Retrieve the tweets from the state in the store
    const tweets = useSelector(selectAllTweets);
    // console.log(tweets);

    const dispatch = useDispatch();
    useEffect(() => findAllTweets(dispatch), [])
    console.log('tweets from TweetList page:', tweets)

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



// const TweetList = () => {
//     const [tweets, setTweets] = useState([]);
//     const [tweet, setTweet] = useState({title: ""});
//
//
//     useEffect(() =>
//         service.findAllTweets()
//             .then(movies => setTweets(tweets)),[]);
//
//     const findTweetById = (tweet) =>
//         service.findTweetById(tweet._id)
//             .then(movie => setTweet(tweet));
//
//     console.log('tweets from TweetList page:', tweets)
//     return (
//         <ul className="list-group">
//
//             {
//
//                 tweets.map(tweet =>
//                     <TweetListItem tweet={tweet}/>
//                 )
//
//
//             }
//         </ul>
//     )
//
// }
// export default TweetList;