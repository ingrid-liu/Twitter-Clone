import {Link} from "react-router-dom";
import APIExamples from "./APIExamples";

const A9Practice = () => {
    return(
        <div>
            <h1>Practice from A9</h1>
            <Link to="/a9/twitter/home">Twitter</Link>
            <APIExamples/>
            {/*<ReduxExamples/>*/}
        </div>
    )
};
export default A9Practice;
