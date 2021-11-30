// import data from JSON file
import whoJson from './data/who.json';

const initialState = {
    who: whoJson
}


// initialize the reducer's state
const who = (state = initialState) => {
    // return the single static state
    return(state);
};

export default who;
