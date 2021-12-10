import React from "react";

const PostItem = ({post}) => {

    return(
        <>
        <li className="list-group-item ">

            <div className="wd-post-float-left ">
                <span className=" ">
                    <img className="wd-post-avatar wd-post-rounded-pic" src={post.avatar}/>
                </span>
            </div>


            <div className="wd-post-float-right ">
                <span className="wd-post-userName">{post.userName}</span>
                <i className="fa fa-check-circle wd-who-to-follow-authenticated"/>
                <span className="wd-tweet-in-topic-subtitle">{post.userID}</span>
                <span className="wd-tweet-in-topic-time">· {post.time}</span>
                <span style ={{"text-align": "right", "float": "right", "color":"grey"}}>{post.more}</span>
                <p className="wd-post-tweet wd-post-bottom-margin wd-tweet-in-topic-content-preview wd-tweet-in-topic-number-adjust-lower">
                    {post.tweet_predix} <span style={{"color":"dodgerblue"}}>{post.tweet_at}</span><span> {post.tweet_postdix}</span>
                </p>

                <div className="wd-post-tweets-image-frame wd-post-rounded-corners-all-around">
                    <img className="wd-post-tweets-image " src={post.image}/>
                    <div className="wd-post-tweets-content {haveCaption === true? '':'d-none'}">
                        <p className="wd-post-tweets-content-title">{post.imgCaption }</p>
                        <p className="wd-post-tweets-content-content">{post.imgCaption_content}</p>
                        <a className="wd-post-tweets-content-link" href="#">{post.imgCaption_content_link}</a>

                    </div>
                </div>


               <div className="row mt-3 ">
                    <span>
                        <i className = "far fa-comment">&nbsp;&nbsp;&nbsp;</i>
                    <span className = "wd-bookmarks-action-numbers ">{post.comment}</span>
                        <i className = "wd-span"/>
                        <i className="fas fa-retweet">&nbsp;&nbsp;&nbsp;</i>
                    <span className = "wd-bookmarks-action-numbers">{post.retweets}</span>
                        <i className = "wd-span"/>
                        <i className="far fa-heart ">&nbsp;&nbsp;&nbsp;</i>
                    <span className = "wd-bookmarks-action-numbers">{post.likes}</span>
                        <i className = "wd-span"/>
                        <i className="fas fa-share"/>
                    </span>
               </div>

               <div className="wd-icons wd-text-opacity-half">

               </div>
            </div>
        </li>

        </>



    );
}
export default PostItem;

// userID, userName, time, title, tweet, imag   // title, content
// comment, retweets, likes