import NavigationSidebar from "../NavigationSidebar.js";
// import ExploreComponent from "./ExploreComponent.js";
// import WhoToFollowList from "../WhoToFollowList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>




        </div>
    `);
})($);



// NavigationSidebar


//     ${ExploreComponent()}
// <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//     ${WhoToFollowList()}
// </div>



// ExploreComponent
// WhoToFollowList



