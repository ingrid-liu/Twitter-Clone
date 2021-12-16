// const profileAPI = 'http://localhost:4000/api/profile';
import {createMovie, findAllMovies, findMovieById, updateMovie} from "../a9/Practice/Movies/service";

const profileAPI = 'https://node-on-heroku-ingrid.herokuapp.com/api/profile';


// export const getCurrentProfile = (dispatch) =>
//     fetch(profileAPI)
//         .then(response => response.json())
//         .then(profile =>
//             dispatch({
//                 type: 'fetch-all-profile',
//                 profile
//             })
//         );
//
// export const updateCurrentProfile = (dispatch, profile) => {
//     console.log('current profile to be updated:', profile);
//     fetch(`${profileAPI}/${profile._id}`, {
//         // method: "POST",
//         method: "PUT",
//         body: JSON.stringify(profile),
//         headers: {
//             "content-type": "application/json",
//             'accept': 'application/json'
//         }
//     })
//         // .then(response => dispatch({
//         //         type: "modify-profile",
//         //     profile
//         //     })
//         // );
//         .then(response => {
//             return response.clone().json()
//         })
//         .then(profile =>
//             dispatch({
//                 type: 'save1',
//                 profile
//             }))
//
// }
//
// export default {
//     getCurrentProfile,updateCurrentProfile
//
// };


export const getCurrentProfile = (dispatch) => {
    fetch(profileAPI)
        .then(response => response.json())
        .then(profile => dispatch({
            type: 'fetch-all-profile',
            profile
        }))
}


export const updateCurrentProfile = (dispatch, profile) => {
    fetch(profileAPI, {
        method: "PUT",
        body: JSON.stringify(profile),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => dispatch({
                type: "save1",
                profile
            })
        );
}
// export const getCurrentProfile = (dispatch) =>
//     fetch(profileAPI)
//         .then(response => response.json())
//         .then(information =>
//             dispatch({
//                 type: 'fetch-all-profile',
//                 information
//             })
//         );
//
// export const updateCurrentProfile = (dispatch, newOwner) => {
//     console.log(newOwner);
//
//     fetch(profileAPI, {
//         method: 'POST',
//         body: JSON.stringify(newOwner),
//         headers: {
//             'content-type': 'application/json',
//             'accept': 'application/json'
//         }
//     })
//         .then(response => {
//             return response.clone().json()
//         })
//         .then(information =>
//             dispatch({
//                 type: 'save1',
//                 information
//             }))
// };