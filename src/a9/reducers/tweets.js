// import data from JSON file
import posts from './data/tweets.json';

const tweets = (state = posts, action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            // professor provided code
            // return({
            //     tweets: action.tweets
            // })

            // workable attempt provided on Piazza
            return(action.tweets);
            break;


        case 'delete-tweet':
            return state.filter(tweet => tweet._id !== action.tweet._id);

        case 'create-tweet':
            // original [works great for my A7]
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                ...action.tweet,
                "avatar-image": "../../../images/avatar_elonmusk.jpeg",
                "logo-image": "../../../images/avatar_elonmusk.jpeg",
                "stats": {
                    "comments": 0,
                    "retweets": 0,
                    "likes": 0
                },
            };
            return([
                {
                    ...tweet,
                    "tweet": action.tweet
                },
                ...state
            ]);


            // Professor's version:

            // return ({
            //     tweets: [
            //         tweet,
            //         ...state.tweets,
            //     ]
            // });

            // From Piazza [If I use this version, it affects my A7!]
            // case 'create-tweet':
            // return ({
            //     tweets: [
            //         action.tweet,
            //         ...state.tweets,
            //     ]
            // });

            // From Piazza II (partially work for my A8 but will damage my A7)

            // case 'create-tweet':
            //     const tweet = {
            //         _id: (new Date()).getTime() + '',
            //         "topic": "Web Development",
            //         "userName": "ReactJS",
            //         "verified": false,
            //         "handle": "ReactJS",
            //         "time": "2h",
            //         ...action.tweet,
            //         "avatar-image": "/images/nodejs.png",
            //         "logo-image": "/images/nodejs.png",
            //         "stats": {
            //             "comments": 0,
            //             "retweets": 0,
            //             "likes": 0
            //         },
            //     };
            //     return ([
            //             tweet,
            //             ...state,
            //         ]
            //     );

        case 'like-tweet':
            return state.map(tweet => {
                if (tweet._id === action.tweet._id) {
                    if (tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });


        default:
            return(state);
    }

};

export default tweets;
