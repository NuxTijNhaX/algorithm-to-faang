function twoSum(numbers, target) {
  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    if (right > target) right--;

    const current = numbers[right] + numbers[left];

    if (current === target) return [left, right];
    else if (current > target) right--;
    else left++;
  }

  return [];
}

///*** */
///*** */
///*** */

console.log(twoSum([1, 2, 3, 4], 3));
