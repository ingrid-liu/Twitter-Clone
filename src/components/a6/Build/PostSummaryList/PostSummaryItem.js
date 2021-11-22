import React from "react";

const PostSummaryItem = (
    {post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "image": "../../../images/tweet_img_reactJS.png",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs"
    }
    }) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-9 col-md-10">
                    <div className="text-muted">{post.topic}</div>
                    <div>
                        <span className="fw-bold">
                            {post.userName}
                            <span className="fa-stack" style={{"font-size": "0.5em"}}>
                              <i className="fas fa-circle fa-stack-2x"/><i className="fas fa-check fa-stack-1x fa-inverse"/>
                            {/*<i className="fa fa-check-circle wd-who-to-follow-authenticated"/>*/}
                            </span>
                        </span>
                        <span className="text-muted"> - {post.time} </span>
                    </div>
                    <div className="fw-bold">{post.title}</div>
                </div>
                <div className="col-3 col-md-2">
                    <img src={post.image}
                         alt="avatar" className="float-end" width="85" height="85" style={{"border-radius" : "10px"}}/>
                </div>
            </div>
        </li>

    );
}

export default PostSummaryItem;
//
// <li classNameName="list-group-item wd-tweet-in-topic ">
//     <div className="wd-float-right ">
//                 <span className=" wd-float-left wd-who-to-follow-user-avatar">
//                 <img className="wd-tweet-preview-img " src={post.image}/>
//                 </span>
//     </div>
//     <div className="wd-tweet-preview-content ">
//         <p className="wd-tweet-in-topic-subtitle">{post.topic}</p>
//         <span className="wd-tweet-in-topic-content-preview">{post.userName}</span>
//         <i className="fa fa-check-circle wd-who-to-follow-authenticated"></i>
//         <span className="wd-tweet-in-topic-time">- {post.time}</span>
//         <p className="wd-tweet-in-topic-content-preview wd-tweet-in-topic-number-adjust-lower">
//             {post.title}
//         </p>
//     </div>
//     <div className="wd-float-done"></div>
// </li>