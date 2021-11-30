// import useState to work with local state (consumer is in charge of rendering content
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);

    // create local state variable initialized
    const [todo, setTodo] = useState({do: '', done: false});
    const dispatch = useDispatch();


    // handle keystroke: changes in input field (modify local state: useState while typing)
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        // Create (set) new todo
        setTodo(newTodo);
    }

    // create action object (use dispatch to manage global state)
    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        // send action to reducers
        dispatch(action);
    }

    // delete todo event handler (accpet todo and create new action)
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }

    // update
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }



    // return ---------------------------------------------------------

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control"/>

                    <button onClick={createTodoClickHandler} className="btn btn-primary">
                            Create New Todo
                    </button>
                </li>

                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            <input checked={todo.done}
                                   onChange={(event) =>
                                       // copy old state & overwrite done with target.checked
                                       updateTodoClickHandler(
                                           {...todo,
                                               done: event.target.checked})}
                                   type="checkbox"/>

                            {todo.do}
                            <button onClick={() =>
                                deleteTodoClickHandler(todo)} className="btn btn-danger float-end">
                                    Delete
                            </button>

                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;
