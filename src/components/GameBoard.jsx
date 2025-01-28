import { act, useEffect, useRef, useState } from "react";
import Win from "../WInningCondition";
import Model from "./Model";

let gamebox = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({set,turn,player1,player2}) {
  const [temp, setTemp] = useState(gamebox);
  const [activePlayer,setActivePlayer]=useState(true);
  const [winnner,setWinner]=useState("Draw")
  const[count,setCount]=useState(0)
  const model=useRef()

  const reset=()=>{
    setTemp(gamebox=[
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])
    set()
    setActivePlayer(true)
    setCount(0)
    setWinner("Draw")
  }

  console.log(temp)

  const win=Win(gamebox);

  useEffect(()=>{
    if(win=="X") {
      setWinner(player1)}

    if(win=="O") {
      setWinner(player2)}
  },[win])

  if(win=="X"||win=="O"||count==9){
    model.current.open(winnner)
    
  }

  const spread = (rowItem, colItem) => {
    setCount(count=>count+1)
    setTemp((temp) => {
      const updateBoard = [...temp];
      updateBoard[rowItem][colItem] = activePlayer ? "X" : "O";
      return updateBoard;
    });
    turn()
    setActivePlayer(!activePlayer)
    
  };

  
  return (
    <>
    <Model ref={model} turn={turn} reset={reset}></Model>
      <div className="container  mt-4">
        {temp.map((row, rowItem) => (
          <div
            className="row pb-4"
            style={{ paddingLeft: "110px" }}
            key={rowItem}
          >
            {row.map((col, colItem) => (
              <div className="col-4" key={colItem}>
                <button
                  onClick={() => spread(rowItem, colItem)}
                  id="board-button"
                  className="btn btn-dark"
                  disabled={col!=null}
                >
                  {col}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default GameBoard;
