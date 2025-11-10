const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;


  const mainStr = String(str);
  const additionStr = String(addition);


  let additionPart = '';
  if (additionStr !== '') {
    const additionArray = Array(additionRepeatTimes).fill(additionStr);
    additionPart = additionArray.join(additionSeparator);
  }


  const fullString = mainStr + additionPart;


  const resultArray = Array(repeatTimes).fill(fullString);
  return resultArray.join(separator);
}

module.exports = {
  repeater
};
