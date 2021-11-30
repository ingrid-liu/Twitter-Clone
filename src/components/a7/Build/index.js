import React from "react";
import {Link, Route} from "react-router-dom";

import {createStore} from "redux";
import {Provider} from "react-redux";

import A7ExploreScreen from "./ExploreScreen";
// import A7HomeScreen from "./HomeScreen";
// import A7ProfileScreen from "./ProfileScree";

// import all reducers
import who from "../../../reducers/who.js"
import A7HomeScreen from "./HomeScreen";

// create the store from the reducer
const store = createStore(who);

const A7Build = () => {
    return(
        // version I
        <>
            <p>from A7 Build</p>
            <A7HomeScreen/>
            <br/>
        </>

        // version II - use Redux [creating the store in app.js and wrapping the content returned by app.js]
        // provide the store to all child components
        // <Provider store={store}>
        //     <>
        //         <Route
        //             path={["/", "/a7/twitter/home"]}
        //             exact={true}
        //             component={A7HomeScreen}
        //         />
        //         <Route
        //             path="/a7/twitter/explore"
        //             exact={true}
        //             component={A7ExploreScreen}
        //         />
        //
        //         {/*<Route*/}
        //         {/*    path = "/a7/twitter/profile"*/}
        //         {/*    exact = {true}*/}
        //         {/*    component = {ProfileScreen}*/}
        //         {/*/>*/}
        //
        //     </>
        // </Provider>
    );
};

export default A7Build;

// import tweets from "../../../reducers/tweets.js"
// import profile from "../../../reducers/profile.js";
//
// import {combineReducers, createStore} from "redux";
// import {Provider} from "react-redux";
//
// // combine both reducers
// const totalReducer = combineReducers({
//     tweets: tweets,
//     who: who,
//     profile: profile
// });
//
// // create data storage
// const store = createStore(totalReducer);