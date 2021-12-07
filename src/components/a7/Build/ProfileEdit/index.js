// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import NavigationSideBar from '../NavigationSidebar/index'
// import { Link } from 'react-router-dom'
//
// import profile from '../../../../reducers/profile'
//
// const userInfo = (state) => state.profile;
//
// const A7ProfileEdit = () => {
//     const profile = useSelector(userInfo);
//
//     // create local state variable initialized
//     let [name, setName] = useState({newName: profile.name})
//     let [info, setInfo] = useState({bio: profile.bio})
//     let [location, setLocation] = useState({location: profile.location})
//     let [personalURL, setPersonalURL] = useState({web : profile.website})
//     let [birth, setBirth] = useState({birthday: profile.dateOfBirth});
//     const dispatch = useDispatch()
//
//
//     // handle keystroke: changes in input field (modify local state: useState while typing)
//     const nameChangeHandler = (event) => {
//         const name = event.target.value;
//         const newName = {
//             newName : name
//         };
//         setName(newName);
//     }
//     const bioChangeHandler = (event) => {
//         const bio = event.target.value;
//         const newInfo = {
//             bio : bio
//         };
//         setInfo(newInfo);
//     }
//
//     const locationChangeHandler = (event) => {
//         const location = event.target.value;
//         const newLocation = {
//             location : location
//         };
//         setLocation(newLocation);
//     }
//
//     const websiteChangeHandler = (event) => {
//         const web = event.target.value;
//         const newWeb = {
//             web : web
//         };
//         setPersonalURL(newWeb);
//     }
//
//     const birthChangeHandler = (e) => {
//         const birthday = e.target.value;
//         const newBirth = {birthday : birthday}
//         setBirth(newBirth);
//     }
//
//     const saveClickHandler = () => {
//         dispatch({type: 'save', info, location, personalURL, name, birth})
//     }
//     return (
//
//         <>
//             <div className="row mt-2">
//                 <div className="col-2 col-md-2 col-lg-1 col-xl-2" style={{ 'position': 'relative' }}>
//                     <NavigationSideBar active={'profile'}/>
//                 </div>
//                 <div className="col-10 col-md-10 col-lg-11 col-xl-10">
//                     <div className="row">
//                         <div className="col-1 d-flex align-items-center justify-content-center">
//
//                             <Link to="/a7/twitter/profile">
//                                 <i className="fas fa-times"></i>
//                             </Link>
//
//                         </div>
//                         <div className="col-10">
//                             <div style={{ fontSize: '20px' }}>
//                                 Edit Profile
//                             </div>
//
//                         </div>
//                         <div className="col-1">
//                             <Link to="/a7/twitter/profile">
//                                 <button className="btn btn-light rounded-pill bg-white me-2 float-end"
//                                         onClick={saveClickHandler}>
//                                     <span className="fw-bold text-black">Save</span>
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                     <div>
//                         <img
//                             src={profile.bannerPicture}
//                             height="200px" width="100%" style={{ objectFit: 'cover' }}/>
//
//                     </div>
//                     <div className="ms-2">
//                         <div>
//                             <img
//                                 src={profile.profilePicture}
//                                 className="rounded-circle"
//                                 height="120px"
//                                 width="120px"
//                                 style={{ position: 'relative', border: 'black solid 2px', marginTop: '-55px' }}
//                                 alt="profile picture"
//                             />
//                         </div>
//
//                         <div className="mt-2">
//                             <label for="name">Name</label>
//                             <textarea className="bg-black text-white " id="name" style={{width:"100%"}}
//                                       value = {name.newName} onChange={nameChangeHandler}>
//                                 {profile.name}
//                             </textarea>
//                         </div>
//                         <div className="mt-2 ">
//                             <label for="bio">Bio</label>
//                             <textarea className="bg-black text-white" name='bio' style={{width:"100%"}}
//                                       value={info.bio} onChange={bioChangeHandler}>
//                                 {profile.bio}
//                             </textarea>
//                         </div>
//                         <div className="mt-2">
//                             <label for="location">Location</label>
//                             <textarea className="bg-black text-white"  name="location" style={{width:"100%"}}
//                                       value={location.location} onChange={locationChangeHandler}>
//                                 {profile.location}
//                             </textarea>
//                         </div>
//                         <div className="mt-2">
//                             <label for="website">Website</label>
//                             <textarea className="bg-black text-white" name="website" style={{width:"100%"}}
//                                       value={personalURL.page} onChange={websiteChangeHandler}>
//                                 {profile.website}
//                             </textarea>
//                         </div>
//                         <div>
//                             <div>
//                                 <span>Birth date - </span>
//                                 <label for="birthday" className="text-primary">Edit</label>
//                             </div>
//                             <div>
//
//                                 <input id="birthday" type="date" className="bg-light text-white"
//                                        value={birth.birthday}  onChange = {birthChangeHandler}
//
//                                 />
//                             </div>
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//
//         </>
//     )
// }
// export default A7ProfileEdit




import React, {useState} from "react";
// import TextField from "@mui/material/TextField";

import "./editProfile.css";
import {useSelector, useDispatch} from "react-redux";


const A7ProfileEdit = ({setEdit}) => {
    const profile = useSelector(state => state.profile);

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

    // dispatch
    const dispatch = useDispatch();


    // create action object (use dispatch to manage global state)
    const modifyProfileHandler = (event) => {
        const changedValue = event.target.value;
        const changedName = event.target.name;
        // console.log(changedValue, changedName);

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
        //console.log(profileInfo);
        console.log("pressed save button!");
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
