import React from 'react';
import Buttons from './Buttons';
import produce from 'immer';



const Generation = ({generateEmptyGrid, runSimulation, runningRef, counter, numCols, numRows, grid, running, setRunning, speed, setSpeed, setGrid}) => {

  return (
    <div>
      <h2 id="gen">Generation: {counter} </h2>
      <div
        id="gridDiv"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols}, 21px)`
        }}
      >
        {grid.map((rows, i) => 
          rows.map((col, k) => (
            <div
              id="grid"
              key={`${i}-${k}`}
                onClick={() => {
                  if(running) return; 
                  const newGrid = produce(grid, gridCopy => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;   
                  });
                  setGrid(newGrid);
                  counter += 1;
                }}
              style={{backgroundColor: grid[i][k] ? "black" : ""}}/>
          ))
        )}
      </div>
      <Buttons
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