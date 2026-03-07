/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures_stack(temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];

    while (stack.length > 0 && t > stack[stack.length - 1][0]) {
      const [tVal, tIdx] = stack.pop();

      result[tIdx] = i - tIdx;
    }

    stack.push([t, i]);
  }

  return result;
}

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
function dailyTemperatures_dp(temperatures) {
  const result = new Array(temperatures.length).fill(0);

  for (let i = temperatures.length - 2; i >= 0; i--) {
    let j = i + 1;

    while (j < temperatures.length && temperatures[j] <= temperatures[i]) {
      if (result[j] === 0) {
        j = temperatures.length;
        break;
      }

      j += result[j];
    }

    if (j < temperatures.length) {
      result[i] = j - i;
    }

    console.log(i, result);
  }

  return result;
}

///*** */
///*** */
///*** */

console.log(dailyTemperatures_dp([73, 74, 75, 71, 69, 72, 76, 70])); // [1,1,4,2,1,1,0,0]
