import React, {useState} from "react";
import Profile from "./Profile";
// import EditProfile from "./EditProfile";
import NavigationSidebar from "../NavigationSidebar";


const A7ProfileScreen = () => {
    const [edit, setEdit] = useState(false);
    return (
        <div className="row mt-2">
            <div className="col-2">
                <NavigationSidebar active={"profile"}/>
            </div>
            <div className="col-10 col-lg-6">
                {/*{!edit && <Profile setEdit={setEdit}/>}*/}
                {/*{edit && <EditProfile setEdit={setEdit}/>}*/}
                <Profile/>
            </div>
        </div>









    );
}


export default A7ProfileScreen;


