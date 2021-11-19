import {BrowserRouter, Routes, Route} from "react-router-dom"; // library name: "react-router-dom"
import React from "react";
import HelloWorld from "../hello";
import Todo from "./Todo.js";
import Login from "./Login";

const NavigationExample = () => {
    return(
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/hello" element={<HelloWorld/>} />
                    <Route path="/todo" element={<Todo/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default NavigationExample;
