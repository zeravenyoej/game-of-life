import React, { useState, useRef } from 'react';
import Buttons from './Buttons';
import produce from 'immer';



const Generation = ({t, generateEmptyGrid, runSimulation, runningRef, counter, numCols, numRows, grid, running, setRunning, speed, setSpeed, setGrid}) => {

  return (
    <div>
      <h2>Generation: {counter} </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 21px)`
        }}
      >
        {grid.map((rows, i) => 
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
                onClick={() => {
                  if(running) return; 
                  const newGrid = produce(grid, gridCopy => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;   
                  });
                  setGrid(newGrid);
                  counter += 1;
                }}
              style={{                           
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? "black" : "",
                border: "solid 1px black"
              }}/>
          ))
        )}
      </div>
      <Buttons
        t={t}
        generateEmptyGrid={generateEmptyGrid}
        runSimulation={runSimulation}
        runningRef={runningRef}
        counter={counter}
        numCols={numCols}
        numRows={numRows}
        grid={grid}
        setGrid={setGrid}
        running={running}
        setRunning={setRunning}
        speed={speed}
        setSpeed={setSpeed}
      />
    </div>
  );
};

export default Generation;