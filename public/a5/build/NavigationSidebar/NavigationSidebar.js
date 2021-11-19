const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="#">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                    
                <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="../HomeScreen/home.html">
                    <i class="fa fa-home " style="float: left"></i>
                    <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left" >
                        Home</span>
                </a>
                <a class="list-group-item active ${active === 'home' ? 'active' : ''} " href="../ExploreScreen/explore.html">
                    <i class="fa fa-hashtag " style="float: left"></i>
                    <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                        Explore</span>
                </a>
                <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="notifications.html">
                    <i class="fa fa-bell " style="float: left"></i>
                    <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                        Notification</span>
                </a>
                <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="messages.html">
                    <i class="fa fa-envelope -normal" style="float: left"></i>
                    <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                        Messages</span>
                </a>
                <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="bookmarks.html">
                    <i class="fa fa-bookmark " style="float: left"></i>
                    <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                        Bookmarks</span>
                </a>
                <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="lists.html">
                    <i class="fa fa-list " style="float: left"></i>
                    <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                        Lists</span>
                </a>

                <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="profile.html">
                    <span class="">
                    <i class="fa fa-user wd-nav-icon-normal" style="float: left"></i></span>
                    <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                    Profile</span>
                </a>
                <a class="list-group-item ${active === 'home' ? 'active' : ''}" href=".more.html.html">
                    <span class="fa-stack fa-1x wd-remove-left-margin wd-nav-icon-more" style="float: left">
                        <i class="fas fa-circle fa-stack-1x "></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse wd-fa-more-shrink"></i>
                    </span>
                    <span class="wd-navigation-words wd-remove-left-margin-extra d-inline d-none d-xl-block" style="float: left">More</span>
                </a>            
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
