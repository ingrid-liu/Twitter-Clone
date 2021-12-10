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