function isPalindrome(s) {
  const standardString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  for (let index = 0; index < standardString.length / 2; index++) {
    let left = index;
    let right = standardString.length - index - 1;

    if (standardString[left] !== standardString[right]) return false;
  }

  return true;
}

function isPalindrome_v2(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (!isAlphaNum(s[left])) {
      left++;
      continue;
    }

    if (!isAlphaNum(s[right])) {
      right--;
      continue;
    }

    if (toLower(s[left++]) !== toLower(s[right--])) return false;
  }

  return true;
}

function isAlphaNum(c) {
  const code = c.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122) // a-z
  );
}

function toLower(c) {
  const code = c.charCodeAt(0);

  return code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : c;
}

///*** */
///*** */
///*** */

console.log(isPalindrome_v2("A man, a plan, a canal: Panama"));
