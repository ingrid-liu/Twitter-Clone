//import Library
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers,createStore} from "redux";

//import Library in local vendors
//1.bootstrap
import './vendors/bootstrap/css/bootstrap.min.css';
//2.override one with black background
import './vendors/bootstrap/bootstrap.min.css';
//3.fontawesome
import './vendors/fontawesome-pro/css/all.css';

// import logo from './logo.svg';
import './App.css';

//4. import react component
import HelloA6 from "./components/a6/HelloWorld";
import A6Practice from "./components/a6/Practice";
import A6ExploreScreen from "./components/a6/Build/ExploreScreen";
import A6HomeScreen from "./components/a6/Build/HomeScreen";

import HelloA7 from "./components/a7/HelloWorld";
import A7Practice from "./components/a7/Practice";
import A7HomeScreen from "./components/a7/Build/HomeScreen";
import A7ProfileScreen from "./components/a7/Build/ProfileScreen";
import A7ExploreScreen from "./components/a7/Build/ExploreScreen";
import A7ProfileEdit from "./components/a7/Build/ProfileEdit";

import HelloA8 from "./components/a8/HelloWorld";
import A8Practice from "./components/a8/Practice";
import A8HomeScreen from "./components/a8/Build/HomeScreen";
import A8ProfileScreen from "./components/a8/Build/ProfileScreen";
import A8ProfileEdit from "./components/a8/Build/ProfileEdit";

import A9 from "./a9";
import A9Practice from "./a9/Practice";
import A9HomeScreen from "./a9/Build/HomeScreen";
import A9ProfileScreen from "./a9/Build/ProfileScreen";
import A9ExploreScreen from "./a9/Build/ExploreScreen";
import A9ProfileEdit from "./a9/Build/ProfileEdit";


//5.import reducers
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";



// import testReducer from "./reducers/tests";



// 6. combine reducers
const mainReducer = combineReducers({
    tweets: tweets,
    who,
    profile: profile,
    // testReducer
})
const store = createStore(mainReducer);


function App() {
  return (
      <Provider store={store}>
          <div className="container">
              <BrowserRouter>
                  <HelloA6/>
                  <Routes>
                      {/*<Route path="/hello" element={<HelloWorld/>} />*/}
                      <Route path="/a6" element={<A6ExploreScreen/>} />
                      <Route path="/a6/practice" element={<A6Practice/>}/>
                      <Route path="/a6/twitter" element={<A6ExploreScreen/>}/>
                      <Route path="/a6/twitter/explore" element={<A6ExploreScreen/>}/>
                      <Route path="/a6/twitter/home" element={<A6HomeScreen/>}/>
                  </Routes>
                  <HelloA7/>
                  <Routes>
                      <Route path="/a7" element={<A7HomeScreen/>} />
                      <Route path="/a7/practice" element={<A7Practice/>}/>
                      <Route path="/a7/twitter" element={<A7HomeScreen/>}/>
                      <Route path="/a7/twitter/home" element={<A7HomeScreen/>}/>
                      <Route path="/a7/twitter/profile" element={<A7ProfileScreen/>}/>
                      <Route path="/a7/twitter/profile/edit" element={<A7ProfileEdit/>}/>
                      <Route path="/a7/twitter/explore" element={<A7ExploreScreen/>}/>
                  </Routes>

                  <HelloA8/>
                  <Routes>
                      <Route path="/a8" element={<A8HomeScreen/>} />
                      <Route path="/a8/practice" element={<A8Practice/>}/>
                      <Route path="/a8/twitter" element={<A8HomeScreen/>}/>
                      <Route path="/a8/twitter/home" element={<A8HomeScreen/>}/>
                      <Route path="/a8/twitter/profile" element={<A8ProfileScreen/>}/>
                      <Route path="/a8/twitter/profile/edit" element={<A8ProfileEdit/>}/>
                      <Route path="/a8/twitter/explore" element={<A7ExploreScreen/>}/>
                  </Routes>

                  <A9/>
                  <Routes>
                      <Route path="/a9" element={<A9HomeScreen/>} />
                      <Route path="/a9/practice" element={<A9Practice/>}/>
                      <Route path="/a9/twitter" element={<A9HomeScreen/>}/>
                      <Route path="/a9/twitter/home" element={<A9HomeScreen/>}/>
                      <Route path="/a9/twitter/profile" element={<A9ProfileScreen/>}/>
                      <Route path="/a9/twitter/profile/edit" element={<A9ProfileEdit/>}/>
                      <Route path="/a9/twitter/explore" element={<A9ExploreScreen/>}/>
                  </Routes>


              </BrowserRouter>
          </div>
      </Provider>

  );
}

export default App;