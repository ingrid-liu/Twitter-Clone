import React from "react";
import {Link} from "react-router-dom";

const HelloA6 = () => {
    return(
        <>
            <h2>A6</h2>
            <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/twitter/explore">
                Build
            </Link> |

            <Link to="/a6/twitter/home">
                Challenge
            </Link>

        </>
    )
};
export default HelloA6;


// <a href="/a6/practice">
//     Practice
// </a> |

//version I
// import React from "react";
//
// const HelloWorld = () => {
//     return(
//         <h1>Hello World!</h1>
//     )
// };
//
// export default HelloWorld;
