import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
                ${
                who.map(each => {
                    return(WhoToFollowListItem(each));
                    }).join('')
                }
            </ul>
    `);
}
export default WhoToFollowList;

// ${WhoToFollowListItem('Java')}
// ${WhoToFollowListItem('NASA')}
// ${WhoToFollowListItem('Tesla')}






