import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">

                <div className="col-11" style={{"position": "relative"}}>
                    <i  className="fa fa-search position-absolute" style={{"left": "25px", "top": "11px"}}/>
                    <input placeholder="Search Twitter" className="ps-5 form-control rounded-pill mb-2 col-11"/>
                </div>
                <div className="col-1">
                    <a href="/#">
                        <i className="mt-1 fa fa-2x fa-cog float-end"/>
                    </a>
                </div>

            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="/#">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Sports</a>
                </li>
                <li className="nav-item d-sm-none d-md-inline">
                    <a className="nav-link" href="/#">Entertainment</a>
                </li>
            </ul>

            <div className="position-relative mb-2">
                <img alt="whatever" src="../../../images/spaceX.jpeg" width="100%"/>
                <h2 style={{color: 'white'}} className="fw-bold ms-2 position-absolute bottom-0">
                    SpaceX's Starship</h2>
            </div>
            <PostSummaryList/>

        </>
    );
}
export default ExploreComponent;

// my previous search bar <-- Learn from the better style
// <div classNameName="row">
//     <!-- search field and cog -->
//     <div classNameName="wd-search">
//
//         <form classNameName="d-flex  ">
//             <span classNameName="wd-magnifier"><i classNameName="fa fa-search "></i> </span>
//             <input classNameName="form-control me-2 wd-search-input rounded-pill" type="search"
//                    placeholder="Search Twitter">
//                 <a href="#"><span><i classNameName="fa fa-cog wd-search-cog"></i></span></a>
//         </form>
//
//     </div>
//
// </div>