//import Library
import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
//import Library in local vendors
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-pro/css/all.css';
//import js component
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";

import A6 from "./components/a6/HelloWorld";
import A7 from "./components/a7/HelloWorld";
import A9 from "./components/a8/HelloWorld";

// import logo from './logo.svg';
// import './App.css';

// import {Provider} from "react-redux";


function App() {
  return (
      <div className="container">
        <BrowserRouter>
              {/*<Route path="/a6">*/}
              {/*    <A6/>*/}
              {/*</Route>*/}

              {/*<Route path="/a9">*/}
              {/*    <A9/>*/}
              {/*</Route>*/}

              {/*<Route path="/a7">*/}
              {/*    <A7/>*/}
              {/*</Route>*/}

              <Link to="/a6">A6</Link> |
              {/*<Link to="/a7/practice">A7</Link> |*/}
              {/*<Link to="/a8/practice">A8</Link>*/}
         </BrowserRouter>
       </div>

  );
}

export default App;
// work but not the requirements
// <BrowserRouter>
//     <div className="container">
//         <HelloWorld/>
//         <Practice/>
//         <Build/>
//
//     </div>
// </BrowserRouter>

// assignment provided code: doesn't work (lower version?)
// <BrowserRouter>
//     <div className="container">
//         <Route path="/a6/hello">
//             <HelloWorld/>
//         </Route>
//         <Route path="/a6/practice">
//             <Practice/>
//         </Route>
//         <Route path="/a6/build">
//             <Build/>
//         </Route>
//
//     </div>
// </BrowserRouter>


//worked
// <BrowserRouter>
//     <Routes>
//         <Route path="/a6/hello" exact={true} element={<HelloWorld />} />
//         <Route path="/a6/practice" element={<Practice />} />
//         <Route path="/a6/build" element={<Build />} />
//
//     </Routes>
// </BrowserRouter>


// latest tying work but not functional version
// <BrowserRouter>
//     <div className="container">
//
//         <Link to="/a6/practice">A6</Link> |
//         <Link to="/a7/practice">A7</Link> |
//         <Link to="/a8/practice">A8</Link>
//
//         {/*<Route path="/a9">*/}
//         {/*    <A9/>*/}
//         {/*</Route>*/}
//
//         {/*<Route path="/a6">*/}
//         {/*    <A6/>*/}
//         {/*</Route>*/}
//
//         {/*<Route path="/a7">*/}
//         {/*    <A7/>*/}
//         {/*</Route>*/}
//
//
//         {/*<Route path={["/", "/a7", "/a7/practice"]} exact={true}>*/}
//         {/*    <Practice/>*/}
//         {/*</Route>*/}
//         {/*<Route path="/a7/twitter">*/}
//         {/*    <Build/>*/}
//         {/*</Route>*/}
//     </div>
// </BrowserRouter>