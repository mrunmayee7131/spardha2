import React,{useState} from "react";
import {Link} from "react-router-dom";
import Box from "./box";
import players from "./data";
import Images from "./imagesc";
import imagedata from "./imagedata";
import Page from "./page";
function Sidebar(){
    const [sport,setsport]=useState([]);
    const [istrue,settrue]=useState(false);
    function handleclick(e){
        setsport(e.target.name);
        settrue(true);
    }

    // function createbox(player){
    //     return <Box player1={player.player1} player2={player.player2} time={player.time} location={player.location}/>
    //  }
     function display(players,sport){
        const selectedsport=players.filter((player)=>player.sport===sport);
        return(
           <div>
             <h3 className="lm">Latest Matches</h3>
            {selectedsport.map(player=>(
                
                <Box player1={player.player1} player2={player.player2} time={player.time} location={player.location}/>
            ))}
           </div>
        )
        
     }
     function displayimage(sport,imagedata){
        const selectedimage=imagedata.filter((imagee)=>imagee.sport===sport);
        return(
           <div>
            {selectedimage.map(imagee=>(
                <Images  image={imagee.image}/>
            ))}
           </div>
        )
     }
     function nodata(){
      return(
         <Page />
      )
     }
    return (
       <div className="header">
        <div className="fbdiv">
            <h1>{sport}</h1>
        </div>
        <div className="content">
        {istrue?  displayimage(sport,imagedata) : nodata()}
       
        {istrue?  display(players,sport) : <h></h>}
        </div>
        <div className="side-nav">
            <div className="user">
             <img src="./images/spardha.jpeg" className="user-img"/>
             {/* <div>
              <h1>Thomas</h1>
              <p>thomas@gmail.com</p>
             </div> */}
             {/* <img src="./images/star.png" className="star-img"/> */}
            </div>
           
              <div className="image-container">
            
             <ul>
                <li><img src="./images/football.png" onClick={handleclick} name="football"/><p>Football</p></li>
                <li><img src="./images/tennis.png" onClick={handleclick} name="tennis"/><p>Tennis</p></li>
                <li><img src="./images/hockey.png" onClick={handleclick} name="hockey"/><p>Hockey</p></li>
                <li><img src="./images/basketball.png" onClick={handleclick} name="basketball"/><p>Basketball</p></li>
                <li><img src="./images/cricket.png" onClick={handleclick} name="cricket"/><p>Cricket</p></li>
                <li><img src="./images/badminton.png"onClick={handleclick} name="badminton"/><p>Badminton</p></li>
                <li><img src="./images/volley-ball.png" onClick={handleclick} name="volleyball"/><p>VolleyBall</p></li>
             </ul>
             </div>
        </div>
       </div>
    )
}
export default Sidebar;





