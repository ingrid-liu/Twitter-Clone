// import React from "react";
// import {Route} from "react-router-dom";
// import Practice from "./Practice";
// import Build from "./Build";
//
// const A9 = () => {
//     return(
//         <div>
//             <Route path="/a9/practice" exact={true}>
//                 <Practice/>
//             </Route>
//             <Route path="/a9/twitter">
//                 <Build/>
//             </Route>
//         </div>
//     )
// }
//
// export default A9;

import React from "react";
import {Link} from "react-router-dom";

const A9 = () => {
    return(
        <>
            <hr/>
            <h2>A9</h2>
            <Link to="/a9/practice">
                Practice
            </Link> |
            <Link to="/a9/twitter/home">
                &nbsp;Build (HomeScreen)
            </Link> |
            <Link to="/a9/twitter/profile">
                &nbsp;Challenge (ProfileScreen)
            </Link> |
            <Link to="/">
                &nbsp;Collapse A9
            </Link>

        </>
    )
};

export default A9;