// const URL = 'http://localhost:4000/api/profile';
// const URL = 'https://node-on-heroku-ingrid.herokuapp.com/api/profile';

const URL = 'http://localhost:4000/rest/profile';

const getCurrentProfile = (dispatch) =>
    fetch(URL)
        .then(response => response.json());

const updateCurrentProfile = (dispatch, profile) => {
    console.log(profile);

    fetch(URL, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
}

export default {
    getCurrentProfile, updateCurrentProfile

};


