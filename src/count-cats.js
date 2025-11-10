const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats (matrix) {
   let catCount = 0;
  

  for (let row of matrix) {
   
    for (let cell of row) {
      
      if (cell === '^^') {
        catCount++;
      }
    }
  }
  
  return catCount;
}

module.exports = {
  countCats
};
