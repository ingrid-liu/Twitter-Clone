const WhoToFollowListItem = (who) => {
    return(`            
            <li class="list-group-item wd-who-to-follow-padding">
                    <div >
                        <button class="btn btn-primary wd-who-to-follow-button wd-float-right">
                            <a class="wd-who-to-follow-button-word" href="#">Follow</a>
                        </button>
                    </div>

                    <span class=" wd-float-left wd-who-to-follow-user-avatar">
                        <img class="wd-bookmarks-avatar wd-rounded-pic" src=${who.avatarIcon}/>
                    </span>
                    <span class="wd-who-to-follow-user-name">${who.userName}</span>
                    <i class="fa fa-check-circle wd-who-to-follow-authenticated"></i>
                    <p class="wd-who-to-follow-padding-bottom">@${who.handle}</p>
                    <div class="wd-float-done"></div>
            </li>
            
            
    `);
}
export default WhoToFollowListItem;
