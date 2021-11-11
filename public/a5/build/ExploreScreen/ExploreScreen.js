// import NavigationSidebar from "./test.js";
// import NavigationSidebar from "../test/test.js";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "../ExploreComponent/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>

    `);
})($);

// ${ExploreComponent()}
// <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//     ${WhoToFollowList()}
// </div>
// </div>