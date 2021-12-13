import profile from "./profile";

const tests = {
    name: "Ingrid",
    tweetNum: 321,
    date: '12/23/2020'
};
export default tests;
//
// // create Reducer, initialized the state as the test
// const testReducer = (state = test, action) => {
//     switch (action.type) {
//         case 'edit' :
//             const newTest = action.test;
//             const newResult = {
//                 ...state,
//                 name: newTest.name,
//                 tweetNum: newTest.tweetNum
//             };
//             return newResult;
//
//         case 'save' :
//             break;
//         // Always have default return state
//         default:
//             return state;
//     }
// }
//
//
// export default testReducer;