const URL = 'http://localhost:4000/api/tweets';
// const URL = 'https://node-on-heroku-ingrid.herokuapp.com/api/tweets';
// const URL = 'http://localhost:4000/rest/tweets';


export const findAllTweets = (dispatch) =>
    fetch(URL)
        .then(response => response.json())
        .then(tweets => dispatch({
                type: 'fetch-all-tweets',
                tweets
            })
        );

// export const postNewTweet = (dispatch, newTweet) =>
export const createTweet = (newTweet) =>
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

        // .then(response => dispatch("create-tweet", newTweet))

export const deleteTweet = (id) =>
    fetch(`${URL}/${id}`, {
        method: "DELETE"
    });


// export const likeTweet = (dispatch, tweet) =>
export const updateTweet = (tweet) =>
    fetch(`${URL}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response => response.json())

export default {
    findAllTweets, createTweet,
    deleteTweet, updateTweet

};

// export const findAllTweets = (dispatch) =>
//     fetch(URL)
//         .then(response => response.json())
//         .then(tweets =>
//             dispatch({
//                 type: 'fetch-all-tweets',
//                 tweets
//             })
//         );
//
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
//
// export const deleteTweet = (dispatch, tweet) =>
//     fetch(`${URL}/${tweet._id}`, {
//         method: 'DELETE'
//     }).then(response => dispatch({
//         type: 'delete-tweet',
//         tweet
//     }));
//
// export const likeTweet = (dispatch, tweet) =>
//     fetch(`${URL}/${tweet._id}/like`, {
//         method: 'PUT'
//     })
//         .then(response =>
//             dispatch({
//                 type: 'like-tweet',
//                 tweet
//             }));
//
//
//
// export default {
//     findAllTweets, deleteTweet, createTweet,likeTweet
//
// };