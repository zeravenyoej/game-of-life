import React from 'react';
import Generation from './Generation';
import Presents from './Presets';
import Rules from './Rules';

const MainTop = () => {
  return (
    <div>
      <Generation/>
      <Presents/>
      <Rules/>
    </div>
  );
};

export default MainTop;