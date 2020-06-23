import React from 'react';

const Buttons = ({t, generateEmptyGrid, runSimulation, runningRef, counter, numRows, numCols, grid, running, setRunning, speed, setSpeed, setGrid}) => {
  return (
    <div>
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
          counter = 0
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
          counter +=1
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
          counter +=1
        }}>
          Random (a little)
      </button>

      <button 
        onClick={() => {
          numRows +=1
          setGrid(generateEmptyGrid())
          counter = 0
        }}>
          Add rows
      </button>

      <button 
        onClick={() => {
          numRows -=1
          setGrid(generateEmptyGrid())
          counter = 0
        }}>
          Delete rows
      </button>

      <button 
        onClick={() => {
          numCols +=1
          setGrid(generateEmptyGrid())
          counter = 0
        }}>
          Add columns
      </button>

      <button 
        onClick={() => {
          numCols -=1
          setGrid(generateEmptyGrid())
          counter = 0
        }}>
          Delete columns
      </button>

      <button 
        onClick={() => {
          if (running) { 
            clearTimeout(t);
            setSpeed(() => {
              if (speed <= 0) return; 
              return speed - 50;
            });
            runSimulation();
          }}}>
          Speed it up
      </button>

      <button 
        onClick={() => {
          if (running) { 
            clearTimeout(t);
            setSpeed(speed + 50);
            runSimulation();
          }}}>
          Slow it down
      </button>

    </div>
  );
};

export default Buttons;