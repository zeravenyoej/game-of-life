import React, { useState, useRef } from 'react';
import './App.css';
import Generation from './components/Generation';
import produce from 'immer';
import Words from './components/Words';

let numRows = 25;
let numCols = 25;
let counter = 0;

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  counter = 0;
  return rows;
}

function App() {
  const [speed, setSpeed] = useState(500);
  const [running, setRunning] = useState(false);        
  const [grid, setGrid] = useState(() => generateEmptyGrid());

  const runningRef = useRef(running);
  runningRef.current = running;
  
  const runSimulation = () => {
    if (!runningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, gridCopy => {
        for (let i = 0; i < numRows; i++) {
          for(let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >=0 && newK < numCols) {
                neighbors += g[newI][newK]
              }
            })
  
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1
            }
          }
        }
      })
    })
    counter += 1
    setTimeout(runSimulation, speed);
  }

  return (
    <div className="App">
      <h1>Conway'sGame of Life</h1>
      <Generation
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
      <section>
          <button 
            className="add"
            onClick={() => {
              numRows +=1
              setGrid(generateEmptyGrid())
              counter = 0
            }}>
              + rows
          </button>
          <button 
            onClick={() => {
              numRows -=1
              setGrid(generateEmptyGrid())
              counter = 0
            }}>
              - rows
          </button>

        <div id="cols" className="dimensions">
          <button 
            className="add"
            onClick={() => {
              numCols +=1
              setGrid(generateEmptyGrid())
              counter = 0
            }}>
              + columns
          </button>
          <button 
            onClick={() => {
              numCols -=1
              setGrid(generateEmptyGrid())
              counter = 0
            }}>
              - columns
          </button>
        </div>
      </section>
      <Words/>
    </div>
  );
};
export default App;