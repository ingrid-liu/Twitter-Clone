import React, {useState} from "react";
// import TextField from "@mui/material/TextField";

import "./ProfileEdit.css";
import {useSelector, useDispatch} from "react-redux";


const A7ProfileEdit = ({setEdit}) => {
    const profile = useSelector(state => state.profile);

    // dispatch
    const dispatch = useDispatch();

    // create local state variable initialized
    const profileInfoDefault = {
        name: profile.name,
        bio: profile.bio,
        location: profile.location,
        website: profile.website,
        bannerPicture: profile.bannerPicture,
        profilePicture: profile.profilePicture

    };
    const [profileInfo, setProfileInfo] = useState(profileInfoDefault);


    // create action object (use dispatch to manage global state)
    const modifyProfileHandler = (event) => {
        const changedName = event.target.name;
        const changedValue = event.target.value;

        console.log(changedName, changedValue);

        setProfileInfo(prevValue => {
            switch(changedName){
                case 'name':
                    return {
                        ...prevValue,
                        name: changedValue,
                    };
                    break;
                case 'bio':
                    return {
                        ...prevValue,
                        bio: changedValue,
                    };
                    break;
                case 'location':
                    return {
                        ...prevValue,
                        location: changedValue,
                    };
                    break;
                case 'website':
                    return {
                        ...prevValue,
                        website: changedValue,
                    };
                    break;
                default:
                    return prevValue;
                    break;
            }
        })

    }


    const saveChangesHandler = () => {
        console.log(profileInfo);
        console.log("Click Save!");
        const modifyProfileAction = {
            type: "modify-profile",
            newProfile: profileInfo
        };
        dispatch(modifyProfileAction);

        // modify state, and pass state to parent component
        return setEdit(false);
    }

    const closeEditHandler = () => {
        return setEdit(false);
    }


    return (
        <>
            <div className="wd-edit-header">
                <i onClick={closeEditHandler} className="fas fa-times fa-2x wd-edit-cancel"></i>

                <p className="wd-edit-title">Edit Profile</p>
                <button className="btn btn-lg btn-link wd-save-edits-button" onClick={saveChangesHandler}>Save</button>
            </div>

            {/*banner*/}
            <div className="wd-profile-visual">
                <img className="wd-profile-bannerPic" src={profileInfo.bannerPicture} alt="banner picture"/>
                <img className="wd-profile-profilePic" src={profileInfo.profilePicture} alt="profile picture"/>
            </div>



            {/*form*/}
            <div className="wd-edit-section">

                <div>
                    <p>Name</p>
                    <input onChange={modifyProfileHandler} className="wd-edit-input" value={profileInfo.name} placeholder="Full Name" name="name"></input>
                </div>

                <div>
                    <p>Bio</p>
                    <input onChange={modifyProfileHandler} className="wd-edit-input" value={profileInfo.bio} placeholder="Bio" name="bio"></input>
                </div>

                <div>
                    <p>Location</p>
                    <input onChange={modifyProfileHandler} className="wd-edit-input" value={profileInfo.location} placeholder="Location" name="location"></input>
                </div>

                <div>
                    <p>Website</p>
                    <input onChange={modifyProfileHandler} className="wd-edit-input" value={profileInfo.website} placeholder="Website" name="website"></input>
                </div>

            </div>

        </>
    )
}


export default A7ProfileEdit;