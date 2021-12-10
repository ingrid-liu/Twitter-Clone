import React from "react";
const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../../../images/avatar_NASA.png',
            userName: 'NASA',
            handle: 'NASA',
        }


    }) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img alt="avatar" src={who.avatarIcon} width="48" className="rounded-circle float-start"/>
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}
                        <span className="fa-stack font-size-0-5em">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="rounded-pill float-end btn btn-primary mt-1">Follow</button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;
// my workable version
// <li classNameName="list-group-item wd-who-to-follow-padding">
//     <div>
//         <button classNameName="btn btn-primary wd-who-to-follow-button wd-float-right">
//             <a classNameName="wd-who-to-follow-button-word" href="#">Follow</a>
//         </button>
//     </div>
//
//     <span classNameName=" wd-float-left wd-who-to-follow-user-avatar">
//                         <img classNameName="wd-bookmarks-avatar wd-rounded-pic" src=${who.avatarIcon}/>
//                     </span>
//     <span classNameName="wd-who-to-follow-user-name">${who.userName}</span>
//     <i classNameName="fa fa-check-circle wd-who-to-follow-authenticated"></i>
//     <p classNameName="wd-who-to-follow-padding-bottom">@${who.handle}</p>
//     <div classNameName="wd-float-done"></div>
// </li>