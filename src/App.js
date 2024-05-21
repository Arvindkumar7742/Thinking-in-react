import { useState } from "react";
import "./App.css"

function Square({value,handleClick}){
  return (
    <div class="square" onClick={handleClick}>{value}</div>
  )
}
function App() {
  const [value , setValue] = useState(Array(9).fill(null));
  const [xisNext , setXisNext] = useState(true);
  function handleClick(i){
    if(diclareWinner(value)){
      alert("Winner is: "+diclareWinner(value));
      return;
    }
    let nextValue = value.slice();
    if(value[i]){
      return;
    }
    if(xisNext){
      nextValue[i] = 'X';
      setXisNext(false);
    }
    else{
      nextValue[i] = 'O';
      setXisNext(true);
    }
    setValue(nextValue);
  }
  return (
    <div className="App">
      <div className="board-row">
      <Square value={value[0]} handleClick={()=>handleClick(0)}/>
      <Square value={value[1]} handleClick={()=>handleClick(1)}/>
      <Square value={value[2]} handleClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
      <Square value={value[3]} handleClick={()=>handleClick(3)}/>
      <Square value={value[4]} handleClick={()=>handleClick(4)}/>
      <Square value={value[5]} handleClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
      <Square value={value[6]} handleClick={()=>handleClick(6)}/>
      <Square value={value[7]} handleClick={()=>handleClick(7)}/>
      <Square value={value[8]} handleClick={()=>handleClick(8)}/>
      </div>
    </div>
  );
}
function diclareWinner(value){
    let lines = [ [0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [3,4,6]];
    for(let i=0;i<lines.length;i++){
      let [a,b,c] = lines[i];
      if(value[a] && value[a]===value[b] && value[a] === value[c]){
        return value[a];
      }
    }
    return null;
}
export default App;
