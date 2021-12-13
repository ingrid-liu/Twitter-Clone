import React, {useState} from "react";
import {useSelector} from "react-redux";
import tests from "../../../../reducers/tests";

// const test = (state) => state.test;
const Test = ({editing}) => {
    const [name, setName] = useState(tests.name);
    const [tweetNum, setTweetNum] = useState(tests.tweetNum);

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

    const hideHandler = () => {
        let hideShowHeader;
        hideShowHeader.hide();
    }
    const showHandler = () => {
        let hideShowHeader;
        hideShowHeader.show();
    }


    return (
        <>
            <div id="testPage">
                <h2>Test Page</h2>
                <h4>name: {name}</h4>
                <h4>Num: {tweetNum}</h4>
            </div>

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

            <h3 id="hide-show">
                Hi/show element
            </h3>
            <button id="hide" onChange = {hideHandler}>
                Hide
            </button>

            <button id="show" onChange = {showHandler}>
                Show
            </button>


        </>
    )
}
export default Test;

