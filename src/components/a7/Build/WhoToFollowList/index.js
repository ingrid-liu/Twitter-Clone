import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
    return(
            <ul className="list-group ">
                <li className="list-group-item fw-bold" >
                    Who to follow</li>               
                    
                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }
             
            </ul>
                    
    );
}
export default WhoToFollowList;
// didn't use this, use index.js (same as this file)