import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
            <ul class="list-group ">
                <li class="list-group-item wd-title-bold" >
                    <span class="wd-who-to-follow-title">Who to follow</span>                
                    
                ${
                    who.map(each => {
                        return(WhoToFollowListItem(each));
                    }).join('')
                }
             
            </ul>
                    
    `);
}
export default WhoToFollowList;
