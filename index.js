function topKFrequent(nums, k) {
  const count = {};
  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const n in count) {
    freq[count[n]].push(parseInt(n));
  }

  const result = [];

  for (let index = freq.length - 1; index > 0; index--) {
    for (const element of freq[index]) {
      result.push(element);

      if (result.length === k) return result;
    }
  }

  return result;
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
