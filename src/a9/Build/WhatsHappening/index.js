import React, {useEffect, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {createTweet, fetchAllTweets} from "../TweetList/service";
import service, {createTweet} from "../../services/tweetService"
import {useDispatch} from "react-redux";

// findAllTweets, deleteTweet, createTweet,likeTweet

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
       // const action = {
       //     type: 'create-tweet',
       //     tweet: whatsHappening
       // };
       // dispatch(action);

        createTweet(dispatch, {
            tweet: whatsHappening
        });



    }
    return(
        <>
            <table style={{marginBottom: '16px'}}>
                <tr>
                    <td style={{verticalAlign: 'top'}}>
                        <img src={'../../../images/avatar_elonmusk.jpeg'}
                             className="rounded-circle"
                             style={{width: '48px', margin: '16px'}}/>
                    </td>
                    <td style={{width: "100%"}}>
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control"
                                  style={{width: "100%", color: "white",
                                      padding: "0px",
                                      paddingTop: "15px",
                                      backgroundColor: "black"}}
                                  placeholder="What's happening?"></textarea>
                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="far fa-analytics me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={tweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>
            </table>


        </>
    );
}

export default WhatsHappening;
