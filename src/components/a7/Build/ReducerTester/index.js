import React, {useState} from "react";
import {useSelector} from "react-redux";
// import test from "../../../../reducers/tests";

// const test = (state) => state.test;
const Test = () => {
    const [name, setName] = useState('Ingrid');
    const [tweetNum, setTweetNum] = useState(0);

    const nameChangeHandler = (event) => {
        console.log('nameChangeHandler');
        const newName = event.target.value;
        setName(newName);
    }

    const numChangeHandler = (event) => {
        console.log('tweetNumChangeHandler');
        const newNum = event.target.value;
        setTweetNum(newNum);
    }

    return (
        <>
            <h3>test</h3>
            <h4>name: {name}</h4>
            <h4>Num: {tweetNum}</h4>
            <h4>Change name:</h4>
            <input onChange={nameChangeHandler}
                    type = 'string'
                    value={name}/>

            <h4>new name: {name}</h4>

            <h4>Change number:</h4>
            <input onChange={numChangeHandler}
                   type = 'number'
                   value={tweetNum}/>

        </>
    )
}
export default Test;

