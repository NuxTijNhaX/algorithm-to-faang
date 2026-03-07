/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = [];

  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const canEval = "-+*/".includes(token);

    if (!canEval) {
      stack.push(Number(token));

      continue;
    }

    const second = stack.pop();
    const first = stack.pop();

    let calculated;

    switch (token) {
      case "+":
        calculated = first + second;
        break;
      case "-":
        calculated = first - second;
        break;
      case "*":
        calculated = first * second;
        break;
      case "/":
        calculated = Math.trunc(first / second);
        break;
      default:
        break;
    }

    stack.push(calculated);
  }

  return stack[0];
}

///*** */
///*** */
///*** */

console.log(evalRPN(["10"]));
