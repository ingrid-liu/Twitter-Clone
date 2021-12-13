// const profileAPI = 'http://localhost:4000/api/profile';
const profileAPI = 'https://node-on-heroku-ingrid.herokuapp.com/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(profileAPI)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-all-profile',
                profile
            })
        );

// export const updateCurrentProfile = (dispatch, newProfile) => {
//     console.log(newProfile);
//
//     fetch(profileAPI, {
//         method: 'POST',
//         body: JSON.stringify(newProfile),
//         headers: {
//             'content-type': 'application/json',
//             'accept': 'application/json'
//         }
//     })
//         .then(response => {
//             return response.clone().json()
//         })
//         .then(newProfile =>
//             dispatch({
//                 newProfile
//             }))
// };

export const updateCurrentProfile = (dispatch, newProfile) => {
    console.log(newProfile);
    fetch(profileAPI, {
        // method: "PUT",
        method: "POST",
        body: JSON.stringify(newProfile),
        headers: {
            "content-type": "application/json"
        }
    })
        .then(response => dispatch({
                type: "modify-profile",
            newProfile
            })
        );
}