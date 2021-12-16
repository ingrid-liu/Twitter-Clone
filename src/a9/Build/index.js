import React from "react";

// I deal with my reducer combination work in App.js


import A9HomeScreen from "./HomeScreen";

const A9Build = () => {
    return(
        // version I
        <>
            <p>from A9 Build</p>
            <A9HomeScreen/>
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

export default A9Build;

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