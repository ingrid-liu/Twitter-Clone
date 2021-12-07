const test = {
    name: "Ingrid",
    tweetNum: 321,
    date: '12/23/2020'
};

// create Reducer, initialized the state as the test
const testReducer = (state = test, action) => {
    switch (action.type) {
        case 'edit' :
            break;
        case 'save' :
            break;
        // Always have default return state
        default:
            return state;
    }
}


export default testReducer;