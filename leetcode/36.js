function isValidSudoku(board) {
  const rows = new Uint32Array(9);
  const cols = new Uint32Array(9);
  const boxes = new Uint32Array(9);

  // Flat loop 0..80 → ít overhead hơn nested loop
  for (let i = 0; i < 81; i++) {
    const r = (i / 9) | 0; // bitwise floor cực nhanh
    const c = i % 9;
    const cell = board[r][c];
    if (cell === ".") continue;


    // charCodeAt(0) - 49 nhanh hơn nhiều so với cell - '1'
    const val = cell.charCodeAt(0) - 49; // '1' = 49 → val = 0..8
    const mask = 1 << val;
    const boxIdx = ((r / 3) | 0) * 3 + ((c / 3) | 0);

    // Kiểm tra 3 bitmask cùng lúc
    if (
      (rows[r] & mask) !== 0 ||
      (cols[c] & mask) !== 0 ||
      (boxes[boxIdx] & mask) !== 0
    ) {
      return false;
    }

    rows[r] |= mask;
    cols[c] |= mask;
    boxes[boxIdx] |= mask;
  }
  return true;
}

///*** */
///*** */
///*** */

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
