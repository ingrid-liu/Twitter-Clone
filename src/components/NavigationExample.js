import React from "react";
import HelloWorld from "../hello";
import Todo from "./Todo.js";

const NavigationExample = () => {
  return(
      // navigate hello and todoItem
      <>
      <HelloWorld/>
      <Todo/>
      </>
  );
};
export default NavigationExample;