// worked, but can't save changes
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import NavigationSideBar from '../NavigationSidebar/index'
// import { Link } from 'react-router-dom'

// import profile from '../../../../reducers/profile'

const userInfo = (state) => state.profile;
// const userInfo = (state) => state.profile.profile;

const A7ProfileEdit = ({setEdit}) => {
    const profile = useSelector(userInfo);

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


    const saveChangesHandler = (event) => {
        const modifiedProfile = event.target.value;
        const newProfile = {
            newProfile : modifiedProfile
        };
        setProfileInfo(newProfile);
        return setEdit(false);
    }



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
    )
}
export default A7ProfileEdit

// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
//
// // const userInfo = (state) => state.profile;
//
// const A7ProfileEdit = ({setEdit}) => {
//     const userInfo = (state) => state.profile.profile;
//     const currUser = useSelector(userInfo);
//     const [editProfile, setProfile] = useState(currUser);
//
//     const createNewProfile = (event) => {
//         setProfile({...currUser,
//             name: event.target.value,
//             bio: event.target.value,
//             location:event.target.value,
//             website:event.target.value,
//             dateOfBirth:event.target.value
//
//
//         })
//     }
//
//     const dispatch = useDispatch()
//
//     const save = () => {
//         dispatch({
//             type:'update-profile',
//             profile: editProfile
//         })
//     }
//
//     // handleChange
//     const modifyProfileHandler = (newProfile) =>
//         setProfile(newProfile)
//
//     // keepProfile
//     const saveChangesHandler = (newProfile) => {
//         const action = {
//             type: 'to-keep',
//             profile: editProfile
//         };
//         dispatch(action);
//     }
//
//     const closeEditHandler = () => {
//         return setEdit(false);
//     }
//
//     return (
//         //https://www.youtube.com/watch?v=A2NzeXBLK4Q&t=6863s&ab_channel=WebDevTV 2:35:41 review following code
//         <>
//             <div className="row">
//                 <div className="col-1 d-flex align-items-center justify-content-center">
//
//                     <i onClick={closeEditHandler} className="fas fa-times"></i>
//
//                 </div>
//                 <div className="col-10">
//                     <div style={{ fontSize: '20px' }}>
//                         Edit Profile
//                     </div>
//
//                 </div>
//
//                 <div className="col-1">
//                     <button className="btn btn-light rounded-pill bg-white me-2 float-end"
//                             onClick={saveChangesHandler}>
//                         <span className="fw-bold text-black">Save</span>
//                     </button>
//                 </div>
//             </div>
//             <br></br>
//
//
//             {/*banner*/}
//             <div className="wd-profile-visual">
//                 <img className="wd-profile-bannerPic" height="200px" width="100%" style={{ objectFit: 'cover' }}
//                      src={currUser.bannerPicture} alt="banner picture"/>
//                 <img className="wd-profile-profilePic rounded-circle"
//                      height="120px"
//                      width="120px"
//                      style={{ position: 'relative', border: 'black solid 2px', marginTop: '-55px' }}
//                      src={currUser.profilePicture} alt="profile picture"/>
//             </div>
//
//
//             {/*info editor*/}
//             <div className="wd-edit-section">
//
//
//                 <div className="mt-2">
//                     <textarea className="bg-black text-white" name='name' style={{width: "100%"}}
//                               value={userInfo.name} onChange={modifyProfileHandler}>
//                         {editProfile.name}
//                     </textarea>
//                 </div>
//
//
//                 <div className="mt-2 ">
//                     <label htmlFor="bio">Bio</label>
//                     <textarea className="bg-black text-white" name='bio' style={{width: "100%"}}
//                               value={userInfo.bio} onChange={modifyProfileHandler}>
//                         {editProfile.bio}
//                     </textarea>
//                 </div>
//
//
//                 <div className="mt-2">
//                     <label htmlFor="location">Location</label>
//                     <textarea className="bg-black text-white" name="location" style={{width: "100%"}}
//                               value={userInfo.location} onChange={modifyProfileHandler}>
//                         {editProfile.location}
//                     </textarea>
//                 </div>
//
//
//                 <div className="mt-2">
//                     <label htmlFor="website">Website</label>
//                     <textarea className="bg-black text-white" name="website" style={{width: "100%"}}
//                               value={userInfo.website} onChange={modifyProfileHandler}>
//                         {editProfile.website}
//                     </textarea>
//                 </div>
//
//
//                 <div>
//                     <div>
//                         <span>Birth date - </span>
//                         <label htmlFor="birthday" className="text-primary">Edit</label>
//                     </div>
//                     <div>
//
//                         <input id="birthday" type="date" className="bg-light text-white"
//                                value={userInfo.dateOfBirth} onChange={modifyProfileHandler}
//
//                         />
//                     </div>
//                 </div>
//             </div>
//             <br></br>
//
//         </>
//     )
// }
// export default A7ProfileEdit



