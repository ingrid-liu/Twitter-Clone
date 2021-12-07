// import React from "react";
// import {useSelector} from "react-redux";
// import {Link} from "react-router-dom";
// // import profile from "../../../../reducers/profile";
// // import ProfileEdit from "../ProfileEdit"
//
// const userInfo = (state) => state.profile;
//
// const Profile = ({setEdit}) => {
//     const profile = useSelector(userInfo);
//     // const editProfileHandler = () => {
//     //     return setEdit(true);
//     // }
//
//     return (
//         <>
//             {/*profile header*/}
//             <span>{profile.firstName}</span>
//             <div className="row">
//                 <div className="col-1">
//                     <div style={{marginTop:'13px'}}>
//                         <i className="fas fa-arrow-left"/>
//                     </div>
//                 </div>
//                 <div className="col-11">
//                     <div className="wd-profile-userName"style={{ fontSize: '28px',color:'white'}}>
//                         {profile.name}
//                     </div>
//
//                     <div style={{fontSize: '14px', color: 'darkgray', position: 'relative', bottom: '5px'}}>
//                         {profile.tweetsNum} Tweets
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <img
//                     src={profile.bannerPicture}
//                     height="200px" width="100%" style={{ objectFit: 'cover' }}/>
//
//             </div>
//
//             {/*profile user info*/}
//             <div className="row">
//                 <div className="col ms-2" style={{position:'relative'}}>
//
//                     <img
//                         src={profile.profilePicture}
//                         className="rounded-circle"
//                         height="120px"
//                         width="120px"
//                         style={{ position: 'relative',  border: 'black  solid 2px', marginTop: "-55px"}}
//                     />
//                     <div >
//                         <span style={{ fontSize: '24px', fontWeight: "bold", color:"white"}}>
//                             {profile.name}
//                         </span>
//                         <br/>
//                         <span style={{color: 'gray'}}>
//                             @{profile.handle}
//                         </span>
//                     </div>
//                 </div>
//
//                 <div className="col">
//                     <Link to="/a7/twitter/profile/edit">
//                         <button className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white float-right">
//                             Edit Profile
//                         </button>
//                     </Link>
//
//                 </div>
//             </div>
//
//             <div className="ms-2" style={{color: 'white', position: 'relative', top: '9px'}}>
//                 <div>
//                     {profile.bio}
//                 </div>
//                 <div className="row" style={{color: 'darkgray', position: 'relative', top: '9px'}}>
//                     <div className="col-3 ">
//                         <i className="fas fa-map-marker-alt"/>
//                         <span className="p-2">{profile.location}</span>
//                     </div>
//                     <div className="col-4">
//                         <i className="fas fa-birthday-cake"/>
//                         <span className="p-2">Born {profile.dateOfBirth}</span>
//                     </div>
//                     <div className="col-4">
//                         <i className="fas fa-calendar-alt"/>
//                         <span className="p-2">Joined {profile.dateJoined}</span>
//                     </div>
//                 </div>
//                 <div className="row" style={{position: 'relative', top: '15px'}}>
//                     <div className="col-5">
//                         <span style={{color: 'white', fontWeight:'bold'}} className="p-1">
//                             {profile.followingCount}
//                         </span>
//
//                         <span style={{color: 'darkgray'}} className="p-1">
//                             Following
//                         </span>
//                     </div>
//                     <div className="col-5">
//                         <span style={{color: 'white',fontWeight:'bold'}} className="p-1">
//                             {profile.followersCount}
//                          </span>
//                         <span style={{color: 'darkgray'}} className="p-1">
//                             Followers
//                         </span>
//                     </div>
//                 </div>
//
//                 <br/><br/><br/>
//             </div>
//
//
//         </>
//     )
// }
//
// export default Profile;



import React from "react";
import "./profile.css";
import {useSelector} from "react-redux";


const Profile = ({setEdit}) => {
    const profile = useSelector(state => state.profile);

    const editProfileHandler = () => {
        return setEdit(true);
    }

    return (
        <>
            {/*profile header*/}
            <div className="wd-profile-header">
                <i className="fas fa-arrow-left wd-profile-goback fa-2x"></i>
                <div className="wd-profile-header-info">

                    <p className="wd-profile-name">
                        {profile.name}
                    </p>

                    <p className="wd-profile-tweetCount">
                        {profile.tweetsNum} Tweets
                    </p>

                </div>
            </div>


            {/*profile visual (banner, profile pic, edit)*/}
            <div className="wd-profile-visual">
                <img className="wd-profile-bannerPic" src={profile.bannerPicture} alt="banner picture"/>
                <img className="wd-profile-profilePic" src={profile.profilePicture} alt="profile picture"/>
                <button className="btn btn-lg btn-link wd-edit-profile-button" onClick={editProfileHandler}>Edit Profile</button>
            </div>

            {/*profile information*/}
            <div className="wd-profile-information">
                <p className="wd-profile-name">{profile.name}</p>
                <p className="wd-profile-handle">@{profile.handle}</p>
                <p className="wd-profile-bio">{profile.bio}</p>

                <span className="wd-profile-additional-info">
          <i className="fas fa-map-marker-alt"></i>
          <span className="wd-padding-left-10">{profile.location}</span>
        </span>

                <span className="wd-profile-additional-info">
          <i className="fas fa-globe-asia"></i>
          <span className="wd-padding-left-10">{profile.dateOfBirth}</span>
        </span>

                <span className="wd-profile-additional-info">
          <i className="fas fa-calendar-alt"></i>
          <span className="wd-padding-left-10">{profile.dateJoined}</span>
        </span>


        {/*footer*/}
        <div className="wd-profile-footer">
            <span>
                {profile.followingCount} <span className="wd-lightgray">Following</span>
            </span>
            <span className="wd-padding-left-20">
                {profile.followersCount} <span className="wd-lightgray">Followers</span>
            </span>
                </div>

            </div>



        </>
    )
}

export default Profile;