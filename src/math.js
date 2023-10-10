
/**
 * Returns sum of two numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
function sum(a, b) {
  return a + b;
}

/**
 * subtraction two numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * Devision of two numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns Number
 */
function division(a, b) {
  if (b === 0) {
    throw new Error('division of null.');
  }
  return a / b;
}

/**
 * multiply two numbers.
 * @param {Number} a
 * @param {Number} b 
 * @returns {Number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Contact Strings
 * @param {String} string1 
 * @param {String} string2 
 * @returns 
 */
function goran(string1, string2) {
  return string1 + ' ' + string2
}

module.exports = {
  sum,
  subtraction,
  division,
  multiply,
  goran
};