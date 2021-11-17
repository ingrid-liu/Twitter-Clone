const PostItem = (post) => {
    return(`
        <li class="list-group-item ">
            <!-- Avatar -->
            <div class="wd-post-float-left ">
                <span class=" ">
                    <img class="wd-post-avatar wd-post-rounded-pic" src=${post.avatar}/>
                </span>
            </div>
            
            <!-- Tweet Post -->
            <div class="wd-post-float-right ">
                <span class="wd-post-userName">${post.userName}</span>
                <i class="fa fa-check-circle wd-who-to-follow-authenticated"></i>
                <span class="wd-tweet-in-topic-subtitle">${post.userID}</span>
                <span class="wd-tweet-in-topic-time">· ${post.time}</span>
                <span style = "text-align: right; float: right; color:grey">${post.more}</span>
                <p class="wd-post-tweet wd-post-bottom-margin wd-tweet-in-topic-content-preview wd-tweet-in-topic-number-adjust-lower">
                    ${post.tweet_predix} <span style = "color:dodgerblue">${post.tweet_at}</span><span> ${post.tweet_postdix}</span>
                </p>
                <!-- Tweet Image -->
                <div class="wd-post-tweets-image-frame wd-post-rounded-corners-all-around">
                    <img class="wd-post-tweets-image " src=${post.image}/>
                    <div class="wd-post-tweets-content">
                        <p class="wd-post-tweets-content-title">${post.imgCaption }</p>
                        <p class="wd-post-tweets-content-content">${post.imgCaption_content}</p>
                        <a class="wd-post-tweets-content-link" href="#">${post.imgCaption_content_link}</a>
                        
                    </div>
                </div>
                
               <!-- icons: comments/retweet/like/share-->
               <div class="row mt-3 ">
                    <span>
                        <i class = "far fa-comment">&nbsp;&nbsp;&nbsp;</i>
                    <span class = "wd-bookmarks-action-numbers ">${post.comment}</span>
                        <i class = "wd-span"></i>
                        <i class="fas fa-retweet">&nbsp;&nbsp;&nbsp;</i>
                    <span class = "wd-bookmarks-action-numbers">${post.retweets}</span>
                        <i class = "wd-span"></i>
                        <i class="far fa-heart ">&nbsp;&nbsp;&nbsp;</i>
                    <span class = "wd-bookmarks-action-numbers">${post.likes}</span>
                        <i class = "wd-span"></i>
                        <i class="fas fa-share"></i>
                    </span>
               </div>
               
               <div class="wd-icons wd-text-opacity-half">
            

                  
            </div>
        </li>


    
    `);
}
export default PostItem;

// userID, userName, time, title, tweet, imag   // title, content
// comment, retweets, likes