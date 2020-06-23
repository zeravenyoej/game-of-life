import React from 'react';

const Controls = ({setRunning, runSimulation, runningRef}) => {
  return (
    <div className="controls">
      <button
        onClick={() => {
          setRunning(true);
          runningRef.current = true;
          runSimulation();
        }}>
        Play
      </button>

      <button>Pause</button>

      <button
        onClick={() => {
        setRunning(false)
      }}>
        Stop
      </button>
  </div>
  );
};

export default Controls;