# game-of-life
A website to visualize Conway's Game of Life algorithm in cell automation.

Tech Stack
* React
* Immer

 ## Rules
 1. If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.
 2. If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.

## Cellular Automata and Turing Completeness
Celluar Automata is the process by which properties of small components dictate how the entirety of the structure of which they are a part will behave in a subsequent generation. This process can be found in real-world biological and chemical patterns, as well as in mathematics and computer science.

 Turing completness, is a term used to describe a systems that are also automata. That is, they are self-driving. HTML by itself is not turing complete, as it is incapable of changing its own state. But when coupled with, say, Javascript, it has the potential to run by itself.