import React from 'react';

const Rules = () => {
  return (
    <div className="rulesDiv">
      <div className="rules">
        <h1 className="title">Rules</h1>
        <p>1.) If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.</p>
        <p>2.) If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.</p>
      </div>
    </div>
  );
};

export default Rules;