import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import ExploreComponent from "../ExploreComponent/ExploreComponent.js";
// import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        
            <!-- LEFT SIDE BAR - navigation-->
            <!--   given:    <div class="col-2 col-md-2 col-lg-1 col-xl-2">-->
            <div class="col-2 ">
                ${NavigationSidebar()}
            </div>
            
            <!-- CENTER CONTENT - Navigation -->
            <div class="col-10 col-lg-6">
                ${ExploreComponent()}
            </div> 
               
            <!-- RIGHT SIDE BAR - Who to follow -->    
            <!--  given  <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">-->
            <div class="col-4 d-none d-lg-block">
                ${WhoToFollowList()}
            </div>
            
        </div>
    `);
})($);
