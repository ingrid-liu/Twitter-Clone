import {Link} from "react-router-dom";
import APIExamples from "./APIExamples";
import Movies from "./Movies";

const A9Practice = () => {
    return(
        <div>
            <h1>Practice from A9</h1>
            <Link to="/a9/twitter/home">Twitter</Link>
            {/*<APIExamples/>*/}
            <Movies/>
            {/*<ReduxExamples/>*/}
        </div>
    )
};
export default A9Practice;
