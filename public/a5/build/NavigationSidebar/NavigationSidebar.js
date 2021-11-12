const NavigationSidebar = () => {
    return(`
            <ul class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                    
                    <li class="list-group-item " style="clear:both;">
                    <i class="fa fa-home wd-nav-icon-normal" style="float: left"></i>
                    <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left" >
                        Home</span></li>
                    <li class="list-group-item active "><i class="fa fa-hashtag wd-nav-icon-normal" style="float: left"></i>
                    <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                        Explore</span></li>
                    <li class="list-group-item "><i class="fa fa-bell wd-nav-icon-normal" style="float: left"></i>
                        <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                            Notification</span></li>
                    <li class="list-group-item "><i class="fa fa-envelope wd-nav-icon-normal" style="float: left"></i>
                        <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                            Messages</span></li>
                    <li class="list-group-item "><i class="fa fa-bookmark wd-nav-icon-normal" style="float: left"></i>
                        <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                            Bookmarks</span></li>
                    <li class="list-group-item "><i class="fa fa-list wd-nav-icon-normal" style="float: left"></i>
                        <span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">
                            Lists</span></li>

                    <li class="list-group-item "><span class=""><i class="fa fa-user wd-nav-icon-normal" style="float: left"></i></span><span class="wd-navigation-words d-inline d-none d-xl-block" style="float: left">Profile</span></li>
                    <li class="list-group-item ">
                        <span class="fa-stack fa-1x wd-remove-left-margin wd-nav-icon-more" style="float: left">
                            <i class="fas fa-circle fa-stack-1x "></i>
                            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse wd-fa-more-shrink"></i>
                        </span>
                        <span class="wd-navigation-words wd-remove-left-margin-extra d-inline d-none d-xl-block" style="float: left">More</span>
                    </li>            
            </ul>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
