import React from "react";
import {Link} from "react-router-dom";


const NavigationSidebar = ({active = 'explore'}) => {
    const floatLeft = {
        "float" : "left"
    };

    return(
        <>
            <div className="list-group">

                <Link to="/a7/" className="list-group-item">
                    <i className="fab fa-twitter"/>
                </Link>

                <Link to="/a7/twitter/home" className={`list-group-item list-group-item-action ${active === 'home' ?  'active': ''}`}>
                    <i className="fas fa-home wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Home
                </span>
                </Link>

                <Link to="/a7/twitter/explore" className={`list-group-item list-group-item-action ${active === 'explore' ?  'active': ''}`}>
                    <i className="fas fa-hashtag wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Explore
                </span>
                </Link>


                <Link to="/a7/notifications" className={`list-group-item list-group-item-action ${active === 'notifications' ?  'active': ''}`}>
                    <i className="fas fa-bell wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Notifications
                </span>
                </Link>


                <Link to="/a7/messages" className={`list-group-item list-group-item-action ${active === 'messages' ?  'active': ''}`}>
                    <i className="fas fa-envelope wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Messages
                </span>
                </Link>


                <Link to="/a7/bookmarks" className={`list-group-item list-group-item-action ${active === 'bookmarks' ?  'active': ''}`}>
                    <i className="fas fa-bookmark wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Bookmarks
                </span>
                </Link>


                <Link to="/a7/lists" className={`list-group-item list-group-item-action ${active === 'lists' ?  'active': ''}`}>
                    <i className="fas fa-list wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Lists
                </span>
                </Link>


                <Link to="/a7/twitter/profile" className={`list-group-item list-group-item-action ${active === 'profile' ?  'active': ''}`}>
                    <i className="fas fa-user wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Profile
                </span>
                </Link>



                <Link to="/a7/more" className={`list-group-item list-group-item-action ${active === 'more' ?  'active': ''}`}>
                    <i className="fas fa-info-circle wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  More
                </span>
                </Link>

                {/**/}

            </div>

            <div className="d-grid mt-2">
                <Link to="/a7/tweet" className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </Link>
            </div>

            {/*<div className=" d-none d-xl-block">*/}
            {/*    <button className="btn btn-primary  wd-tweet-button ">*/}
            {/*        <a className="wd-tweet-button-link " href="#">Tweet</a>*/}
            {/*    </button>*/}
            {/*</div>*/}

            {/*<div className=" d-xl-none">*/}
            {/*    <a className="wd-tweet-button-link" href="#">*/}
            {/*        <img className="wd-tweet-button-img " src={"../../../images/icon/tweet.png"}/>*/}
            {/*    </a>*/}
            {/*</div>*/}

        </>
    );
}
export default NavigationSidebar;
