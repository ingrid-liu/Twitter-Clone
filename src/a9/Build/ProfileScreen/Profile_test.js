import React, {useEffect, useState} from "react";
import service from '../../services/profileService';
import {useSelector} from "react-redux";


const Profile_test = ({setEdit}) => {
    const [profile, setProfile] = useState([]);

    useEffect(() =>
        service.getCurrentProfile()
            .then(profile => setProfile(profile)),[]);

    const updateCurrentProfile = (event) =>
        setProfile({...profile, title: event.target.value});

    const editProfileHandler = () => {
        return setEdit(true);
    }

    return(
        <>
            <input
                onChange={updateCurrentProfile}
                defaultValue={profile.title}
                className="form-control"/>


            <button className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white float-right" onClick={editProfileHandler}>
                Edit Profile
            </button>
        </>

    )

}

export default Profile_test;