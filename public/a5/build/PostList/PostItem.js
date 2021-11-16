const PostItem = (post) => {
    return(`
        <li class="list-group-item ">
            <div class="wd-post-float-left ">
                <span class=" ">
                    <img class="wd-post-avatar wd-post-rounded-pic" src=${post.avatar}/>
                </span>
            </div>
            
            <div class="wd-post-float-right ">
                <span class="wd-post-userName">${post.userName}</span>
                <i class="fa fa-check-circle wd-who-to-follow-authenticated"></i>
                <span class="wd-tweet-in-topic-subtitle">${post.userID}</span>
                <span class="wd-tweet-in-topic-time">- ${post.time}</span>
                <p class="wd-post-tweet wd-post-bottom-margin wd-tweet-in-topic-content-preview wd-tweet-in-topic-number-adjust-lower">
                    ${post.tweet}
                </p>
                
                <div class="wd-post-tweets-image-frame wd-post-rounded-corners-all-around">
                    <img class="wd-post-tweets-image " src=${post.image}/>
                    <div class="wd-post-tweets-content">
                        <p class="wd-post-tweets-content-title">${post.title}</p>
                        <p class="wd-post-tweets-content-content">${post.content}</p>
                        <a class="wd-post-tweets-content-link" href="#">${post.link}</a>
                    </div>
                </div>
                
                <!-- comments/retweet/like/share-->
                <div class="wd-bookmarks-action-button">
                    <a href="#">
                        <span class=" wd-tweets-comment wd-bookmarks-action-icon">
                            <i class="fa fa-comment wd-bookmarks-action-icon"></i>
                            <span class="wd-bookmarks-action-numbers wd-bookmarks-action-icon">22</span>
                        </span>
                    </a>

                    <a href="#">
                        <span class=" wd-tweets-retweet">
                            <i class="fa fa-retweet wd-bookmarks-action-icon"></i>
                            <span class="wd-bookmarks-action-numbers wd-bookmarks-action-icon">9</span>
                        </span>
                    </a>

                    <a href="#">
                        <span class=" wd-tweets-like wd-bookmarks-action-icon">
                            <i class="fa fa-heart wd-bookmarks-action-icon" style="color: red"></i>
                            <span class="wd-bookmarks-action-numbers-like wd-bookmarks-action-numbers">37</span>
                        </span>
                    </a>

                    <a href="#">
                        <span class=" wd-tweets-share wd-bookmarks-action-icon">
                            <i class="fa fa-share wd-bookmarks-action-icon"></i>
                        </span>
                    </a>

                </div>
                
                
                
            </div>
            
        </li>



        
        
        
        
        
        
        
    
    `);
}
export default PostItem;

// userID, userName, time, title, tweet, imag   // title, content
// comment, retweets, likes