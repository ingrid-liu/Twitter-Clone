const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

// const todos = () => {
//     return data;
// }

const todos = (state = data, action) => {
    switch (action.type) {
        // rebuild the array by iterating over the todos
        case 'update-todo':
            const newTodos = state.map(todo => {
                const newTodo = todo._id === action.todo._id ? action.todo : todo;
                return newTodo;
            });
            return newTodos;

        // delete by using a filter
        case 'delete-todo':
            return state.filter(todo => todo !== action.todo);

        // create
        case 'create-todo':
            const newTodo = {
                ...action.todo,
                _id: (new Date()).getDate() + ""
            };

            return [
                ...state,
                // action.todo
                newTodo
            ]



        default:
            return state;
    }
}


export default todos;