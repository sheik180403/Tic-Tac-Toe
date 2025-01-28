import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GameBoard from "./GameBoard";
import Players from "./Player";
import Model from "./Model";
export default function GameBody() {

  const[player1,setName1]=useState("player 1");
  const[player2,setName2]=useState("player 2");

  const [activePlayer,SetActivePlayer]=useState({
    player: player1,
    symbol:"X",
    condition:false
  })

  useEffect(()=>{
    SetActivePlayer({...activePlayer,
      player:player1
    })
  },[player1])

  const reset=()=>{
    SetActivePlayer({...activePlayer,
      player:player1,
      symbol:"X",
      condition:false
    })
  }

  

  const turnChange=()=>{
    SetActivePlayer((activePlayer)=>{
      if(activePlayer.condition){
        return{
          ...activePlayer,
          player:player1,
          symbol:"X",
          condition:false
        }
      }else{
        return{
          ...activePlayer,
          player:player2,
          symbol:"O",
          condition:true
        }
      }
    })
  }

  return (
    <>
      
      <div id="gameBody" className="container mt-3">
        <div className="d-flex justify-content-around pt-4">
          <Players  setName={setName1} symbol="X">{player1}</Players>
          <Players  setName={setName2} symbol="O">{player2}</Players>
        </div>
        <div>
          <h4 className="text-warning">Turn: <span style={{color:"white",fontSize:"20px"}}>{activePlayer.player}-{activePlayer.symbol}</span></h4>
        </div>
        <div className="container" style={{ marginLeft: "-60px",marginTop:"-10px" }}>
          <GameBoard set={reset} player1={player1} player2={player2} turn={turnChange}/>
        </div>
      </div>
    </>
  );
}
