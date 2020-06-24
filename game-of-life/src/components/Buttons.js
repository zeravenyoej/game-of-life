import React from 'react';


const Buttons = (
  {generateEmptyGrid, runSimulation, runningRef, numRows, 
    numCols, running, setRunning, speed, setSpeed, setGrid}) => {

  return (
    <div id="buttonsDiv">
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}>
        {running ? "Stop" : "Start"}
      </button>

      <button 
        onClick={() => {
          setGrid(generateEmptyGrid())
        }}>
          Clear
      </button>

      <button 
        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => Math.random() > 0.7 ? 1 : 0));
          }
          setGrid(rows);
        }}>
          Random (a lot)
      </button>

      <button 
        onClick={() => {
          const rows = [];
          for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => Math.random() > 0.9 ? 1 : 0));
          }
          setGrid(rows);
        }}>
          Random (a little)
      </button>
    </div>
  );
};

export default Buttons;