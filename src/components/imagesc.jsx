import React from "react";
function games(props){
    return(
        <div className="gameimages"> 
            <img src={props.image}/>
        </div>
    )
}
export default games;