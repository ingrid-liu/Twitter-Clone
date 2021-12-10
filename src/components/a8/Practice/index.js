import {Link} from "react-router-dom";
import APIExamples from "./APIExamples";

const A8Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a8/twitter/home">Build</Link>
            <APIExamples/>
            {/*<ReduxExamples/>*/}
        </div>
    )
};
export default A8Practice;
