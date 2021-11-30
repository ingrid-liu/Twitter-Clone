// // import stylesheet
// import "./what.css";
// // import lib
// import React, {useState} from "react";
// import {useDispatch} from "react-redux";
//
// const WhatsHappening = () => {
//   const [whatsHappening, setWhatsHappening] = useState("");
//
//   // use dispatch
//   const dispatch = useDispatch();
//
//   const tweetTxtAreaHandler = (event) => {
//     setWhatsHappening(event.target.value);
//   }
//
//   const tweetClickHandler = () => {
//     console.log("pressed tweet button..");
//     const action = {
//       type: 'create-tweet',
//       tweet: whatsHappening
//     };
//     dispatch(action);
//   }
//
//
//
//   return (
//     <div className="row">
//       <div className="col-2">
//         <img src="/images/elonMusk.jpg" alt="profile-image" className="wd-bookmark-usr-img"/>
//       </div>
//
//       <div className="col-10 wd-whatshappening-bottom">
//         <textarea className="row wd-whatsHappeningTextArea" placeholder="What's happening?" value={whatsHappening} onChange={tweetTxtAreaHandler}></textarea>
//
//           <span>
//             <i className="far fa-image wd-whatshappening-icons"></i>
//             <i className="fas fa-chart-line wd-whatshappening-icons"></i>
//             <i className="far fa-smile wd-whatshappening-icons"></i>
//             <i className="far fa-calendar wd-whatshappening-icons"></i>
//           </span>
//
//           <button className="btn btn-primary rounded-pill wd-whatshappening-button" onClick={tweetClickHandler}>
//             Tweet
//           </button>
//
//       </div>
//     </div>
//   );
// };
//
//
//
// export default WhatsHappening;