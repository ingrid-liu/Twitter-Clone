import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts.json";

const PostSummaryList = () => {
    const title = "test"
    return(
        <ul className="list-group">
                {/*<p style={{"color": "white", "font-weight":"bold", "font-size":"25px", "position": "relative", "top": "20px"}}>*/}
                {/*    What's happening*/}
                {/*</p>*/}
            {

                posts.map(post => {
                    return (
                        <PostSummaryItem post={post}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;
