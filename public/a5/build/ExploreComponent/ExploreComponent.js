import PostSummaryList from "../PostSummaryItem/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                       <div class="wd-search">

                            <form class="d-flex  ">
                                <span class="wd-magnifier"><i class="fa fa-search "></i> </span>
                                <input class="form-control me-2 wd-search-input wd-rounded-corners-all-around" type="search" placeholder="Search Twitter">
                                <a href="#"><span><i class="fa fa-cog wd-search-cog"></i></span></a>
                            </form>

                        </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                    <!-- tabs -->
                    <li class="nav-item wd-tags">
                        <a class="nav-link " href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item d-none d-sm-block">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
              
           </ul>
           <!-- image with overlaid text -->
           <div class="wd-focus-img">
                <a href="#"><image class="wd-nav-tweet-img " src="../images/spaceX.jpeg"/></a>
                <a class="wd-tweet-img-title d-none d-sm-block" href="#">SpaceX's Starship</a>
           </div>
           
           <!-- PostSummaryList -->
           <ul class="list-group wd-focus-tweet-frame-adjust-upper ">
                ${PostSummaryList()}
           </ul>
    `);
}
export default ExploreComponent;

