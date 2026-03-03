function encode(strs) {
  let encoded = "";

  for (const str of strs) {
    const strLen = str.length;

    encoded += `${strLen}#${str}`;
  }

  return encoded;
}

function decode(str) {
  let decoded = [];
  let lastPos = 0;

  for (let index = 0; index < str.length; index++) {
    const c = str[index];
    if (c !== "#") continue;

    const length = parseInt(str.slice(lastPos, index));
    if (isNaN(length)) continue;

    const world = str.slice(index + 1, index + 1 + length);

    decoded.push(world);

    lastPos = index + world.length + 1;
  }

  return decoded;
}

// Safer - binary

function encode_v2(strs) {
  let result = "";

  for (let str of strs) {
    const len = str.length;

    // Chuyển độ dài thành 4 bytes (big-endian 32-bit)
    result +=
      String.fromCharCode((len >> 24) & 0xff) +
      String.fromCharCode((len >> 16) & 0xff) +
      String.fromCharCode((len >> 8) & 0xff) +
      String.fromCharCode(len & 0xff);

    // Nối nội dung string
    result += str;
  }

  return result;
}

function decode_v2(str) {
  const result = [];

  let i = 0;

  while (i < str.length) {
    let length = 0;

    for (let j = 0; j < 4; j++) {
      length = (length << 8) | str.charCodeAt(i);
      i++;
    }

    result.push(str.substring(i, i + length));
    i += length;
  }

  return result;
}

///*** */
///*** */
///*** */

console.log(decode_v2(encode_v2(["we", "say", ":", "yes", "!@#$%^&*()"])));
