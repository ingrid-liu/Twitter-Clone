const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item wd-tweet-in-topic ">
            <div class="wd-float-right ">
                <span class=" wd-float-left wd-who-to-follow-user-avatar">
                <img class="wd-tweet-preview-img " src=${post.image}/>
                </span>
            </div>
            <div class="wd-tweet-preview-content ">
                <p class="wd-tweet-in-topic-subtitle">${post.topic}</p>
                <span class="wd-tweet-in-topic-content-preview">${post.userName}</span>
                <i class="fa fa-check-circle wd-who-to-follow-authenticated"></i><span class="wd-tweet-in-topic-time">- ${post.time}</span>
                <p class="wd-tweet-in-topic-content-preview wd-tweet-in-topic-number-adjust-lower">
                    ${post.title}
                </p>
            </div>
            <div class="wd-float-done"></div>
        </li>
    
    `);
}
export default PostSummaryItem;

// topic, userName, time, title, and image