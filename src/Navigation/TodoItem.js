import React from "react";

const TodoItem = ({todo}) => {
  return(
      <li>
        <input type="checkbox"/>
        {todo.title}
        ({todo.status})
        <select>
          <option>Done</option>
          <option>In Process</option>
          <option>Cancelled</option>
        </select>
        <button>Delete</button>
      </li>

  );
};

export default TodoItem;