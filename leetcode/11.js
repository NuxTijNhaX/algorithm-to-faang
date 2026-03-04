function maxArea(heights) {
  let left = 0,
    right = heights.length - 1;

  let result = 0;

  while (left < right) {
    const h = Math.min(heights[left], heights[right]);
    const w = right - left;
    const area = h * w;

    result = Math.max(result, area);

    if (heights[left] <= heights[right]) left++;
    else right--;
  }

  return result;
}

///*** */
///*** */
///*** */

console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
