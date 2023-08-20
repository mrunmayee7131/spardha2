import React from "react";

function Box(props){
   return( <div className="bbox">
           
           <div className="box">
           <div>{props.player1}</div>
           <img src="./images/versus.avif" className="images" />
           <div>{props.player2}</div>
           {/* <img src="./images/time-white.png" className="images-loc" /> */}
           <div> <img src="./images/time-white.png" className="images-loc" />{props.time}</div>
           {/* <img src="./images/location.png" className="images-loc" /> */}
           <div> <img src="./images/location.png" className="images-loc" />{props.location}</div>
           {/* <div> Learn more <img src="./images/arrow2.png" className="images-loc" /></div> */}
          </div>
          </div>
   )
}
export default Box;