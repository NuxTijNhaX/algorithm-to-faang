function trap(height) {
  const n = height.length;
  let water = 0;

  for (let i = 1; i < n - 1; i++) {
    let maxLeft = 0;
    for (let j = 0; j < i; j++) {
      maxLeft = Math.max(maxLeft, height[j]);
    }

    let maxRight = 0;
    for (let j = i + 1; j < n; j++) {
      maxRight = Math.max(maxRight, height[j]);
    }

    const add = Math.max(0, Math.min(maxLeft, maxRight) - height[i]);
    water += add;
  }

  return water;
}

function trap_preCompute(height) {
  const leftMaxs = new Array(height.length);
  const rightMaxs = new Array(height.length);

  leftMaxs[0] = height[0];

  for (let i = 1; i < height.length; i++)
    leftMaxs[i] = Math.max(leftMaxs[i - 1], height[i]);

  rightMaxs[height.length - 1] = height[height.length - 1];

  for (let i = height.length - 2; i >= 0; i--) {
    rightMaxs[i] = Math.max(height[i], rightMaxs[i + 1]);
  }

  let water = 0;
  for (let i = 0; i < height.length; i++) {
    const level = Math.min(leftMaxs[i], rightMaxs[i]);
    water += level - height[i];
  }

  return water;
}

function trap_twoPointers(height) {
  let left = 0,
    right = height.length - 1;

  let maxLeft = 0,
    maxRight = 0;

  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      const canHoldWater = height[left] < maxLeft;

      if (canHoldWater) {
        trappedWater += maxLeft - height[left];
      } else {
        maxLeft = Math.max(height[left], maxLeft);
      }

      left++;
    } else {
      const canHoldWater = height[right] < maxRight;

      if (canHoldWater) {
        trappedWater += maxRight - height[right];
      } else {
        maxRight = Math.max(height[right], maxRight);
      }

      right--;
    }
  }

  return trappedWater;
}

///*** */
///*** */
///*** */

console.log(trap_twoPointers([0, 2, 0, 3, 1, 0, 1, 3, 2, 1]));
