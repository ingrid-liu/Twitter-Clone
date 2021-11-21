import React from "react";
import {Link} from "react-router-dom";


const NavigationSidebar = ({active = 'explore'}) => {
    const floatLeft = {
        "float" : "left"
    };

    return(
        <>
            <div className="list-group">

                <a className="list-group-item" href="/#">
                    <i className="fab fa-twitter"></i></a>

                <a className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="/#">
                    <i className="fa fa-home " style={floatLeft}></i>
                    <span className="wd-navigation-words d-inline d-none d-xl-block" style={floatLeft}>
                        Home</span>
                </a>
                <a className={`list-group-item ${active === 'explore' ? 'active' : ''} `} href="/#">
                    <i className="fa fa-hashtag " style={floatLeft}></i>
                    <span className="wd-navigation-words d-inline d-none d-xl-block" style={floatLeft}>
                        Explore</span>
                </a>
                <a className={`list-group-item ${active === 'notification' ? 'active' : ''}`} href="/#">
                    <i className="fa fa-bell " style={floatLeft}></i>
                    <span className="wd-navigation-words d-inline d-none d-xl-block" style={floatLeft}>
                        Notification</span>
                </a>
                <a className={`list-group-item ${active === 'message' ? 'active' : ''}`} href="/#">
                    <i className="fa fa-envelope -normal" style={floatLeft}></i>
                    <span className="wd-navigation-words d-inline d-none d-xl-block" style={floatLeft}>
                        Messages</span>
                </a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href="/#">
                    <i className="fa fa-bookmark " style={floatLeft}></i>
                    <span className="wd-navigation-words d-inline d-none d-xl-block" style={floatLeft}>
                        Bookmarks</span>
                </a>
                <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="/#">
                    <i className="fa fa-list " style={floatLeft}></i>
                    <span className="wd-navigation-words d-inline d-none d-xl-block" style={floatLeft}>
                        Lists</span>
                </a>

                <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="/#">
                    <span className="">
                    <i className="fa fa-user wd-nav-icon-normal" style={floatLeft}></i></span>
                    <span className="wd-navigation-words d-inline d-none d-xl-block" style={floatLeft}>
                    Profile</span>
                </a>
                <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="/#">
                    <span className="fa-stack fa-1x wd-remove-left-margin wd-nav-icon-more" style={floatLeft}>
                        <i className="fas fa-circle fa-stack-1x "></i>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse wd-fa-more-shrink"></i>
                    </span>
                    <span className="wd-navigation-words wd-remove-left-margin-extra d-inline d-none d-xl-block" style={floatLeft}>More</span>
                </a>



            </div>
            <div className="d-grid mt-2">
                <a href="/#"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
