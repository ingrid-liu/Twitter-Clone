const URL = 'http://localhost:4000/rest/tweets';



// export const findAllTweets = (dispatch) =>
//     fetch(URL)
//         .then(response => response.json())
//         .then(tweets => {
//                 console.log("看看Client", tweets);
//
//                 return   dispatch({
//                     type: 'fetch-all-tweets',
//                     tweets
//                 })
//             }
//         );

export const findAllTweets = () =>
    // send HTTP GET to URL
    fetch(URL)
        .then(response => response.json());

// export const deleteTweet = (dispatch, tweet) =>
//     fetch(`${URL}/${tweet._id}`, {
//         method: 'DELETE'
//     }).then(response => dispatch({
//         type: 'delete-tweet',
//         tweet
//     }));

const deleteTweet = (id) =>
    fetch(`${URL}/${id}`,
        {
            method: "DELETE"
        });


// export const createTweet = (dispatch, newTweet) =>
//     fetch(URL, {
//         method: 'POST',
//         body: JSON.stringify(newTweet),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(tweet =>
//             dispatch({
//                 type: 'create-tweet',
//                 tweet
//             })
//         );

export const createTweet = (newTweet) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());



export const findTweetById = (id) =>
    fetch(`${URL}/${id}`)
        .then(response => response.json());


export const updateTweet = (tweet) =>
    fetch(`${URL}/${tweet._id}`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());

export const likeTweet = (dispatch, tweet) =>
    fetch(`${URL}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                tweet
            }));



export default {
    findAllTweets, deleteTweet, createTweet,findTweetById,updateTweet,likeTweet
};