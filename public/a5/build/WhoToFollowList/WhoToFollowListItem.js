const WhoToFollowListItem = (who) => {
    return(`            
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src="${who.avatarIcon}" width="48" class="rounded-circle float-start"/>
                </div>
                <div class="col-8">
                    <div class="fw-bold">${who.userName}
                        <span class="fa-stack" style="font-size: 0.5em">
                          <i class="fas fa-circle fa-stack-2x"></i>
                          <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-2">
                    <button class="rounded-pill float-end btn btn-primary mt-1">Follow</button>
                </div>
            </div>
        </li>
            
            
    `);
}
export default WhoToFollowListItem;
// my workable version
// <li className="list-group-item wd-who-to-follow-padding">
//     <div>
//         <button className="btn btn-primary wd-who-to-follow-button wd-float-right">
//             <a className="wd-who-to-follow-button-word" href="#">Follow</a>
//         </button>
//     </div>
//
//     <span className=" wd-float-left wd-who-to-follow-user-avatar">
//                         <img className="wd-bookmarks-avatar wd-rounded-pic" src=${who.avatarIcon}/>
//                     </span>
//     <span className="wd-who-to-follow-user-name">${who.userName}</span>
//     <i className="fa fa-check-circle wd-who-to-follow-authenticated"></i>
//     <p className="wd-who-to-follow-padding-bottom">@${who.handle}</p>
//     <div className="wd-float-done"></div>
// </li>