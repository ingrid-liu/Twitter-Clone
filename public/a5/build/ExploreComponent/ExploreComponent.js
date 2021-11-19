import PostSummaryList from "../PostSummaryItem/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <!-- search field and cog -->
            <div class="row">
                <div class="col-11" style="position: relative">
                    <i  class="fa fa-search position-absolute"
                        style="left: 25px; top: 11px"></i>
                    <input placeholder="Search Twitter" class="ps-5 form-control rounded-pill mb-2 col-11"/>
                </div>
                <div class="col-1">
                    <a href="setting.html">
                        <i class="mt-1 fa fa-2x fa-cog float-end"></i>
                    </a>
                </div>
            </div>
           <ul class="nav mb-2 nav-tabs">
                    <!-- tabs -->
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item d-none d-sm-block">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-lg-block">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
              
           </ul>
           <!-- image with overlaid text -->
           <div class="wd-focus-img">
                <image class="wd-nav-tweet-img " src="../images/spaceX.jpeg"/>
                <h1 class="wd-tweet-img-title d-none d-sm-block" href="#">SpaceX's Starship</h1>
           </div>
           
           <!-- PostSummaryList -->
           <ul class="list-group wd-focus-tweet-frame-adjust-upper ">
                ${PostSummaryList()}
           </ul>
    `);
}
export default ExploreComponent;

// my previous search bar <-- Learn from the better style
// <div className="row">
//     <!-- search field and cog -->
//     <div className="wd-search">
//
//         <form className="d-flex  ">
//             <span className="wd-magnifier"><i className="fa fa-search "></i> </span>
//             <input className="form-control me-2 wd-search-input rounded-pill" type="search"
//                    placeholder="Search Twitter">
//                 <a href="#"><span><i className="fa fa-cog wd-search-cog"></i></span></a>
//         </form>
//
//     </div>
//
// </div>