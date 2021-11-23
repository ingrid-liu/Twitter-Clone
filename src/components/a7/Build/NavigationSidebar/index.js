import React from "react";
import {Link} from "react-router-dom";


const NavigationSidebar = ({active = 'explore'}) => {
    const floatLeft = {
        "float" : "left"
    };

    return(
        <>
            <div className="list-group">

                <Link to="/a6/" className="list-group-item">
                    <i className="fab fa-twitter"/>
                </Link>

                <Link to="/a6/twitter/home" className={`list-group-item list-group-item-action ${active === 'home' ?  'active': ''}`}>
                    <i className="fas fa-home wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Home
                </span>
                </Link>

                <Link to="/a6/twitter/explore" className={`list-group-item list-group-item-action ${active === 'explore' ?  'active': ''}`}>
                    <i className="fas fa-hashtag wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Explore
                </span>
                </Link>


                <Link to="/a6/notifications" className={`list-group-item list-group-item-action ${active === 'notifications' ?  'active': ''}`}>
                    <i className="fas fa-bell wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Notifications
                </span>
                </Link>


                <Link to="/a6/messages" className={`list-group-item list-group-item-action ${active === 'messages' ?  'active': ''}`}>
                    <i className="fas fa-envelope wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Messages
                </span>
                </Link>


                <Link to="/a6/bookmarks" className={`list-group-item list-group-item-action ${active === 'bookmarks' ?  'active': ''}`}>
                    <i className="fas fa-bookmark wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Bookmarks
                </span>
                </Link>


                <Link to="/a6/lists" className={`list-group-item list-group-item-action ${active === 'lists' ?  'active': ''}`}>
                    <i className="fas fa-list wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Lists
                </span>
                </Link>


                <Link to="/a6/profile" className={`list-group-item list-group-item-action ${active === 'profile' ?  'active': ''}`}>
                    <i className="fas fa-user wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  Profile
                </span>
                </Link>



                <Link to="/a6/more" className={`list-group-item list-group-item-action ${active === 'more' ?  'active': ''}`}>
                    <i className="fas fa-info-circle wd-float me-2"/>
                    <span className="d-none d-xl-inline">
                  More
                </span>
                </Link>

                {/**/}

            </div>

            <div className="d-grid mt-2">
                <Link to="/a6/tweet" className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </Link>
            </div>
        </>
    );
}
export default NavigationSidebar;
