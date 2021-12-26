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