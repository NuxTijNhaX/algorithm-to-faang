function threeSum(nums) {
  const tripletSet = new Set();
  const sortedNums = nums.sort();

  for (let i = 0; i < sortedNums.length - 2; i++) {
    for (let j = i + 1; j < sortedNums.length - 1; j++) {
      for (let k = j + 1; k < sortedNums.length; k++) {
        if (sortedNums[i] + sortedNums[j] + sortedNums[k] === 0)
          tripletSet.add(
            JSON.stringify([sortedNums[i], sortedNums[j], sortedNums[k]]),
          );
      }
    }
  }

  return Array.from(tripletSet).map((v) => JSON.parse(v));
}

function threeSum_hashMap(nums) {
  const sortedNums = nums.sort();
  const freqMap = new Map();
  const result = [];

  for (const num of sortedNums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (let i = 0; i < sortedNums.length; i++) {
    freqMap.set(sortedNums[i], freqMap.get(sortedNums[i]) - 1);

    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    for (let j = i + 1; j < sortedNums.length; j++) {
      freqMap.set(sortedNums[j], freqMap.get(sortedNums[j]) - 1);

      if (j > i + 1 && sortedNums[j] === sortedNums[j - 1]) continue;

      const target = -(sortedNums[i] + sortedNums[j]);

      if (freqMap.get(target) > 0) {
        result.push([sortedNums[i], sortedNums[j], target]);
      }
    }

    for (let j = i + 1; j < sortedNums.length; j++) {
      freqMap.set(sortedNums[j], freqMap.get(sortedNums[j]) + 1);
    }
  }

  return result;
}

function threeSum_2Pointers(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] > 0) break;

    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let left = i + 1,
      right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;
        while (left < right && sortedNums[left] === sortedNums[left - 1]) {
          left++;
        }
      }
    }
  }

  return result;
}

///*** */
///*** */
///*** */

console.log(
  threeSum_2Pointers([
    2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10,
  ]),
);
