import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../../../../services/profileService";
// import {Link} from "react-router-dom";


const userInfo = (state) => state.profile;

const Profile = ({setEdit}) => {
    let profile = useSelector(userInfo);

    const dispatch = useDispatch();
    useEffect(() => getCurrentProfile(dispatch), []);

    const editProfileHandler = () => {
        return setEdit(true);
    }

    return (
        <>
            {/*profile header*/}
            <div className="row">
                <div className="col-1">
                    <div style={{marginTop:'13px'}}>
                        <i className="fas fa-arrow-left"/>
                    </div>
                </div>
                <div className="col-11">
                    <div className="wd-profile-userName"style={{ fontSize: '28px',color:'white'}}>
                        {profile.name}
                    </div>

                    <div style={{fontSize: '14px', color: 'darkgray', position: 'relative', bottom: '5px'}}>
                        {profile.tweetsNum} Tweets
                    </div>
                </div>
            </div>
            <div>
                <img
                    src={profile.bannerPicture}
                    height="200px" width="100%" style={{ objectFit: 'cover' }}/>

            </div>

            {/*profile user info*/}
            <div className="row">
                <div className="col ms-2" style={{position:'relative'}}>

                    <img
                        src={profile.profilePicture}
                        className="rounded-circle"
                        height="120px"
                        width="120px"
                        style={{ position: 'relative',  border: 'black  solid 2px', marginTop: "-55px"}}
                    />
                    <div >
                        <span style={{ fontSize: '24px', fontWeight: "bold", color:"white"}}>
                            {profile.name}
                        </span>
                        <br/>
                        <span style={{color: 'gray'}}>
                            @{profile.handle}
                        </span>
                    </div>
                </div>

                <div className="col">
                    {/*<Link to="/a7/twitter/profile/edit">*/}
                        <button className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white float-right" onClick={editProfileHandler}>
                            Edit Profile
                        </button>
                    {/*</Link>*/}

                </div>
            </div>

            <div className="ms-2" style={{color: 'white', position: 'relative', top: '9px'}}>
                <div>
                    {profile.bio}
                </div>
                <div className="row" style={{color: 'darkgray', position: 'relative', top: '9px'}}>
                    <div className="col-3 ">
                        <i className="fas fa-map-marker-alt"/>
                        <span className="p-2">{profile.location}</span>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-birthday-cake"/>
                        <span className="p-2">Born {profile.dateOfBirth}</span>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-calendar-alt"/>
                        <span className="p-2">Joined {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="row" style={{position: 'relative', top: '15px'}}>
                    <div className="col-5">
                        <span style={{color: 'white', fontWeight:'bold'}} className="p-1">
                            {profile.followingCount}
                        </span>

                        <span style={{color: 'darkgray'}} className="p-1">
                            Following
                        </span>
                    </div>
                    <div className="col-5">
                        <span style={{color: 'white',fontWeight:'bold'}} className="p-1">
                            {profile.followersCount}
                         </span>
                        <span style={{color: 'darkgray'}} className="p-1">
                            Followers
                        </span>
                    </div>
                </div>

                <br/><br/><br/>
            </div>


        </>
    )
}

export default Profile;


