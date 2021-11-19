import React from "react";
import TodoItem from "./TodoItem";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
// import todos from './todos.json';

const Todo = (
    {
        todos = [
            {title: 'todo1'},
            {title: 'todo2'},
            {title: 'todo3'},
            {title: 'todo4'},
        ]
    }
    ) => {     // deconstruct syntax, one of the object is todos
    //instead of hard-coding, I can use an array to store the json object
    //We delicately put this content in a seperated json file
    // const todos = [
    //     {title: 'Buy the milk' },
    //     {title: 'Walk the dogs' },
    //     {title: 'Dress up' },
    //     {title: 'Drink milk' },
    //     {title: 'Go to sleep' },
    // ];
    return(
        <div>
            <Navigation/>

            <h1>ToDo</h1>
            <ul>
                {
                //    Opening a javascript expression inside of the html using {}
                    todos.map((todo) => {
                        return(
                            <TodoItem todo={todo}/>
                        )
                    })
                }

                <TodoItem todo={{title:'Buy the milk!!', status:'Complete'}}/>
                <TodoItem todo={{title:'Pickup the kids', status:'Complete'}}/>
                <TodoItem todo={{title:'Walk the dogs', status:'Complete'}}/>
                <TodoItem todo={{title:'Make dinner', status:'Complete'}}/>

            </ul>
        </div>
    );
}

export default Todo;