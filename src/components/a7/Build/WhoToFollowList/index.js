import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";

// import hook to retrieve state from reducer
import {useSelector} from "react-redux";

// const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    // Retrieve state from store
    const who = useSelector((state) => state.who);
    // const who = useSelector(selectAllWho);

    return(
        <ul className="list-group ">
            <li className="list-group-item fw-bold" >
                Who to follow
            </li>

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