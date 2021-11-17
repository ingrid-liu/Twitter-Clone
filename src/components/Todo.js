import React from "react";

const Todo = () => {
    //instead of hard-coding, I can use an array to store the json object
    //We delicately put this content in a seperated json file
    const todos = [
        {title: 'Buy the milk' },
        {title: 'Walk the dogs' },
        {title: 'Dress up' },
        {title: 'Drink milk' },
        {title: 'Go to sleep' },
    ];
    return(
        <div>
            <h1>ToDo</h1>
            <ul>
                {
                //    Opening a javascript expression inside of the html using {}
                    todos.map((todo) => {
                        return(<li>{todo.title}</li>)
                    })
                }
                <li>Buy the milk</li>
                <li>Walk the dogs</li>
                <li>Dress up</li>
                <li>Drink milk</li>
            </ul>
        </div>
    );
}

export default Todo;