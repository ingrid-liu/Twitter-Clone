import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome-pro/css/all.css';

// import HelloWorld from "./components/a6/HelloWorld";
// import Practice from "./components/a6/Practice";
// import Build from "./components/a6/Build";

import A6 from "./components/a6";

// import logo from './logo.svg';
// import './App.css';




function App() {
  return (
      <BrowserRouter>
          <Link to="/a6/practice">A6</Link> |
      </BrowserRouter>
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