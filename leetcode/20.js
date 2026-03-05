/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (!pairs[char]) stack.push(char);
    else {
      if (pairs[char] !== stack.pop()) return false;
    }
  }

  return stack;
}

///*** */
///*** */
///*** */

console.log(isValid("([{}])"));
