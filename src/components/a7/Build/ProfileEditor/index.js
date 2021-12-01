import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const ProfileEditor = () => {
    const profile = useSelector(state => state.profile)

    return(
        <>
            <div className="row">
                <div className="col-1">
                    <div style={{marginTop:'13px'}}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                </div>
                <div className="col-11">
                    <div style={{ fontSize: '30px',color:'white'}}>
                        {profile.name}
                    </div>

                    <div style={{color: 'darkgray'}}>
                        5,169 Tweets
                    </div>
                </div>
            </div>
            <div>
                <img
                    src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    height="400px" width="100%" style={{ objectFit: 'cover' }}/>

            </div>
            <div className="row">
                <div className="col ms-2" style={{position:'relative'}}>

                    <img
                        src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        className="rounded-circle"
                        height="160px"
                        width="180px"
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
                    <Link to="/a7/twitter/editBanner">
                        <button className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white float-right">
                            Edit Profile
                        </button>
                    </Link>

                </div>
            </div>
            <div className="ms-2" style={{color: 'white'}}>
                <div>
                    {profile.bio}
                </div>
                <div className="row" style={{color: 'darkgray'}}>
                    <div className="col-3 ">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="p-2">{profile.location}</span>
                    </div>
                    <div className="col-3">
                        <i className="fas fa-birthday-cake"></i>
                        <span className="p-2">Born {profile.dateOfBirth}</span>
                    </div>
                    <div className="col-3">
                        <i className="fas fa-calendar-alt"></i>
                        <span className="p-2">Joined {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <span style={{color: 'red', fontWeight:'bold'}} className="p-1"> {profile.followingCount} <i
                            className="fas fa-arrow-up"></i> </span>

                        <span style={{color: 'darkgray'}} className="p-1">Following</span>
                    </div>
                    <div className="col-5">
                        <span style={{color: 'red',fontWeight:'bold'}} className="p-1"> {profile.followersCount} <i
                            className="fas fa-arrow-up"></i> </span>
                        <span style={{color: 'darkgray'}} className="p-1">Followers</span>
                    </div>
                </div>
            </div>



        </>
    );
}

export default ProfileEditor;