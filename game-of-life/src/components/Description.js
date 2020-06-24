import React from 'react';

const Description = () => {
  return (
    <div>
      <h1 className="title">Cellular Automata and Turing Completeness</h1>
      <p>Celluar Automata is the process by which properties of small components dictate how the entirety of the structure of which they are a part will behave in a subsequent generation. This process can be found in real-world biological and chemical patterns, as well as in mathematics and computer science.</p>
      <p>Turing completness, is a term used to describe a systems that are also automata. That is, they are self-driving. HTML by itself is not turing complete, as it is incapable of changing its own state. But when coupled with, say, Javascript, it has the potential to run by itself.</p>
    </div>
  );
};

export default Description;