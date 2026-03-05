class MinStack_BF {
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    let min = null;

    this.stack.map((v) => {
      if (v < min || min === null) min = v;
    });

    return min;
  }
}

class MinStack_2Stack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);
    this.minStack.push(
      this.getMin() > val || this.getMin() === null ? val : this.getMin(),
    );
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.minStack[this.minStack.length - 1] ?? null;
  }
}

class MinStack_1Stack {
  constructor() {
    this.min = Infinity;
    this.stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.stack.length === 0) {
      this.stack.push(0);
      this.min = val;
    } else {
      this.stack.push(val - this.min);
      if (val < this.min) this.min = val;
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this.stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    const topVal = this.stack[this.stack.length - 1];

    return topVal > 0 ? top + this.min : this.min;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}

///*** */
///*** */
///*** */

const minStack = new MinStack_1Stack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.push(-2);
// console.log(minStack.getMin()); // return 0
// // minStack.pop();
// console.log(minStack.top()); // return 2
// console.log(minStack.getMin()); // return 1
