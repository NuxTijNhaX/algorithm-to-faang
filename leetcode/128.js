///** Hash Set */

function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let result = 0;

  for (const element of numSet) {
    if (numSet.has(element - 1)) continue;

    let length = 1;

    while (numSet.has(element + length)) length++;

    result = Math.max(result, length);
  }

  return result;
}

///** Hash Map */

function longestConsecutive_V2(nums) {
  const numsMap = new Map();
  let result = 0;

  for (const num of nums) {
    if (numsMap.has(num)) continue;

    numsMap.set(
      num,
      (numsMap.get(num - 1) || 0) + (numsMap.get(num + 1) || 0) + 1,
    );

    numsMap.set(num - (numsMap.get(num - 1) || 0), numsMap.get(num));
    numsMap.set(num + (numsMap.get(num + 1) || 0), numsMap.get(num));

    result = Math.max(result, numsMap.get(num));
  }

  return result;
}

///*** */
///*** */
///*** */

console.log(longestConsecutive_V2([100, 4, 200, 1, 3, 2]));
