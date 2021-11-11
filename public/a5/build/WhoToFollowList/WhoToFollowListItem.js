const WhoToFollowListItem = (each) => {
    return(`
        <li>
            <input type="checkbox"
                ${each.avatarIcon}/>
                ${each.userName}
                (${each.handle})    
        </li>
    `);
}
export default WhoToFollowListItem;

//each user: avatarIcon, userName, and handle
// {   avatarIcon: './images/avatar_virgin-logo.png',
//     userName: 'Virgin Galactic',
//     handle: 'virgingalactic', },
