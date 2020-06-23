# game-of-life
testing testing 123


two arrays are used: 
  1) current generation
  2) future generation

0 = dead cell
1 = live cell


BIRTH: 
A 0 will stay a 0 unless it has three live neighbors, in which case it'll turn into a 1.

DEATH: 
A 1 will stay a 1 unless it has EITHER less than 2 live nieghbors, or more than 3 live neighbors, in which case it'll turn into a zero. (Translation: it'll stay alive with 2 or 3 live neighbors)

Typically, two arrays are used: one to hold the current generation, and one to calculate its successor. Often 0 and 1 represent dead and live cells, respectively. A nested for loop considers each element of the current array in turn, counting the live neighbours of each cell to decide whether the corresponding element of the successor array should be 0 or 1. The successor array is displayed. For the next iteration, the arrays swap roles so that the successor array in the last iteration becomes the current array in the next iteration.

 there are many ways to save unnecessary computation. A cell that did not change at the last time step, and none of whose neighbours changed, is guaranteed not to change at the current time step as well, so a program that keeps track of which areas are active can save time by not updating inactive zones.[45]