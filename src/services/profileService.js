const profileAPI = "http://localhost:4000/api/profile";

export const getCurrentProfile = (dispatch) => {
  fetch(profileAPI)
    .then(response => response.json())
    .then(profile => dispatch({
      type: 'get-profile',
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
      type: "modify-profile",
      profile
      })
    );
}