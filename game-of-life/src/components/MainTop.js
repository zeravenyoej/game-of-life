import React from 'react';
import Generation from './Generation';
import Presets from './Presets';
import Rules from './Rules';

const MainTop = () => {
  return (
    <div>
      <Generation/>
      {/* <Presets/> */}
      <Rules/>
    </div>
  );
};

export default MainTop;