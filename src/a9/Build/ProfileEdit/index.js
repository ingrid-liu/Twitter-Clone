import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {updateCurrentProfile} from "../../../../services/profileService";

// import NavigationSideBar from '../NavigationSidebar/index'
// import { Link } from 'react-router-dom'

// import profile from '../../../../reducers/profile'

const userInfo = (state) => state.profile;

const A7ProfileEdit = ({setEdit}) => {
    let profile = useSelector(userInfo);
    const dispatch = useDispatch()

    ///////////////////// original


    // // create local state variable initialized
    // let [name, setName] = useState({newName: profile.name})
    // let [info, setInfo] = useState({bio: profile.bio})
    // let [location, setLocation] = useState({location: profile.location})
    // let [personalURL, setPersonalURL] = useState({web : profile.website})
    // let [birth, setBirth] = useState({birthday: profile.dateOfBirth});
    //
    // // let [name, setName] = useState(profile.name)
    // // let [info, setInfo] = useState(profile.bio)
    // // let [location, setLocation] = useState(profile.location)
    // // let [personalURL, setPersonalURL] = useState(profile.website)
    // // let [birth, setBirth] = useState( profile.dateOfBirth);
    //
    //
    //
    // // handle keystroke: changes in input field (modify local state: useState while typing)
    // const nameChangeHandler = (event) => {
    //     const name = event.target.value;
    //     const newName = {
    //         newName : name
    //     };
    //     setName(newName);
    // }
    // const bioChangeHandler = (event) => {
    //     const bio = event.target.value;
    //     const newInfo = {
    //         bio : bio
    //     };
    //     setInfo(newInfo);
    // }
    //
    // const locationChangeHandler = (event) => {
    //     const location = event.target.value;
    //     const newLocation = {
    //         location : location
    //     };
    //     setLocation(newLocation);
    // }
    //
    // const websiteChangeHandler = (event) => {
    //     const web = event.target.value;
    //     const newWeb = {
    //         web : web
    //     };
    //     setPersonalURL(newWeb);
    // }
    //
    // const birthChangeHandler = (e) => {
    //     const birthday = e.target.value;
    //     const newBirth = {birthday : birthday}
    //     setBirth(newBirth);
    // }
    //
    // const saveClickHandler = () => {
    //     dispatch({type: 'save', info, location, personalURL, name, birth})
    // }


    // create local state variable initialized
    const profileInfoDefault = {
        name: profile.name,
        bio: profile.bio,
        location: profile.location,
        website: profile.website,
        bannerPicture: profile.bannerPicture,
        profilePicture: profile.profilePicture,
        dateOfBirth: profile.dateOfBirth
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
        // I should comment down the following previous reducer way
        // but it keeps asking the type
        const modifyProfileAction = {
            type: "modify-profile",
            newProfile: profileInfo
        };
        dispatch(modifyProfileAction);

        updateCurrentProfile(dispatch, profileInfo);


        // modify state, and pass state to parent component
        return setEdit(false);
    }

    // const saveChangesHandler = (event) => {
    //     console.log("pressed save button!");
    //
    //     const modifiedProfile = event.target.value;
    //     const newProfile = {
    //         newProfile : modifiedProfile
    //     };
    //     setProfileInfo(newProfile);
    //
    //     return setEdit(false);
    // }

    const closeEditHandler = () => {
        return setEdit(false);
    }

    return (

        <>
            <div className="row">
                <div className="col-1 d-flex align-items-center justify-content-center">

                        <i onClick={closeEditHandler} className="fas fa-times"></i>

                </div>
                <div className="col-10">
                    <div style={{ fontSize: '20px' }}>
                        Edit Profile
                    </div>

                </div>

                <div className="col-1">
                    <button className="btn btn-light rounded-pill bg-white me-2 float-end"
                            onClick={saveChangesHandler}>
                        <span className="fw-bold text-black">Save</span>
                    </button>
                </div>
            </div>
            <br></br>


            {/*banner*/}
            <div className="wd-profile-visual">
                <img className="wd-profile-bannerPic" height="200px" width="100%" style={{ objectFit: 'cover' }}
                     src={profileInfo.bannerPicture} alt="banner picture"/>
                <img className="wd-profile-profilePic rounded-circle"
                     height="120px"
                     width="120px"
                     style={{ position: 'relative', border: 'black solid 2px', marginTop: '-55px' }}
                     src={profileInfo.profilePicture} alt="profile picture"/>
            </div>


            {/*info editor*/}
            <div className="wd-edit-section">


                <div className="mt-2">
                    <textarea className="bg-black text-white" name='name' style={{width: "100%"}}
                              value={profileInfo.name} onChange={modifyProfileHandler}>
                        {profile.name}
                    </textarea>
                </div>


                <div className="mt-2 ">
                    <label htmlFor="bio">Bio</label>
                    <textarea className="bg-black text-white" name='bio' style={{width: "100%"}}
                              value={profileInfo.bio} onChange={modifyProfileHandler}>
                        {profile.bio}
                    </textarea>
                </div>


                <div className="mt-2">
                    <label htmlFor="location">Location</label>
                    <textarea className="bg-black text-white" name="location" style={{width: "100%"}}
                              value={profileInfo.location} onChange={modifyProfileHandler}>
                        {profile.location}
                    </textarea>
                </div>


                <div className="mt-2">
                    <label htmlFor="website">Website</label>
                    <textarea className="bg-black text-white" name="website" style={{width: "100%"}}
                              value={profileInfo.website} onChange={modifyProfileHandler}>
                        {profile.website}
                    </textarea>
                </div>


                <div>
                    <div>
                        <span>Birth date - </span>
                        <label htmlFor="birthday" className="text-primary">Edit</label>
                    </div>
                    <div>

                        <input id="birthday" type="date" className="bg-light text-white"
                               value={profileInfo.dateOfBirth} onChange={modifyProfileHandler}

                        />
                    </div>
                </div>
            </div>
            <br></br>

        </>




        //////original return part of nong
    // <>
    //     <div className="row mt-2">
    //         <div className="col-2 col-md-2 col-lg-1 col-xl-2" style={{ 'position': 'relative' }}>
    //             <NavigationSideBar active={'profile'}/>
    //         </div>
    //         <div className="col-10 col-md-10 col-lg-11 col-xl-10">
    //             <div className="row">
    //                 <div className="col-1 d-flex align-items-center justify-content-center">
    //
    //                     <Link to="/a7/twitter/profile">
    //                         <i className="fas fa-times"></i>
    //                     </Link>
    //
    //                 </div>
    //                 <div className="col-10">
    //                     <div style={{ fontSize: '20px' }}>
    //                         Edit Profile
    //                     </div>
    //
    //                 </div>
    //                 <div className="col-1">
    //                     <Link to="/a7/twitter/profile">
    //                         <button className="btn btn-light rounded-pill bg-white me-2 float-end"
    //                                 onClick={saveClickHandler}>
    //                             <span className="fw-bold text-black">Save</span>
    //                         </button>
    //                     </Link>
    //                 </div>
    //             </div>
    //             <div>
    //                 <img
    //                     src={profile.bannerPicture}
    //                     height="200px" width="100%" style={{ objectFit: 'cover' }}/>
    //
    //             </div>
    //             <div className="ms-2">
    //                 <div>
    //                     <img
    //                         src={profile.profilePicture}
    //                         className="rounded-circle"
    //                         height="120px"
    //                         width="120px"
    //                         style={{ position: 'relative', border: 'black solid 2px', marginTop: '-55px' }}
    //                         alt="profile picture"
    //                     />
    //                 </div>
    //
    //                 <div className="mt-2">
    //                     <label for="name">Name</label>
    //                     <textarea className="bg-black text-white " id="name" style={{width:"100%"}}
    //                               value = {name.newName} onChange={nameChangeHandler}>
    //                             {profile.name}
    //                         </textarea>
    //                 </div>
    //                 <div className="mt-2 ">
    //                     <label for="bio">Bio</label>
    //                     <textarea className="bg-black text-white" name='bio' style={{width:"100%"}}
    //                               value={info.bio} onChange={bioChangeHandler}>
    //                             {profile.bio}
    //                         </textarea>
    //                 </div>
    //                 <div className="mt-2">
    //                     <label for="location">Location</label>
    //                     <textarea className="bg-black text-white"  name="location" style={{width:"100%"}}
    //                               value={location.location} onChange={locationChangeHandler}>
    //                             {profile.location}
    //                         </textarea>
    //                 </div>
    //                 <div className="mt-2">
    //                     <label for="website">Website</label>
    //                     <textarea className="bg-black text-white" name="website" style={{width:"100%"}}
    //                               value={personalURL.page} onChange={websiteChangeHandler}>
    //                             {profile.website}
    //                         </textarea>
    //                 </div>
    //                 <div>
    //                     <div>
    //                         <span>Birth date - </span>
    //                         <label for="birthday" className="text-primary">Edit</label>
    //                     </div>
    //                     <div>
    //
    //                         <input id="birthday" type="date" className="bg-light text-white"
    //                                value={birth.birthday}  onChange = {birthChangeHandler}
    //
    //                         />
    //                     </div>
    //                 </div>
    //             </div>
    //
    //         </div>
    //     </div>
    //
    // </>
    )
}
export default A7ProfileEdit





