import React, {useState} from "react";
import {useSelector} from "react-redux";

const TestEditor = ({editing}) => {
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

    const saveTestHandler = () => {
        console.log("Click Save!");
        return editing(true);
    }

    return (
        <>
            <div id="testEditor">
                <h2>Editing Test</h2>
                <h4>Change name:</h4>
                <input onChange={nameChangeHandler}
                       type = 'string'
                       value={name}/>

                <h4>Change number:</h4>
                <input onChange={numChangeHandler}
                       type = 'number'
                       value={tweetNum}/>
            </div>

        </>
    )
}
export default TestEditor;

