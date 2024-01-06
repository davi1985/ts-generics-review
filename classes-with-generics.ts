class Person<T, U> {
  constructor(
    public name: T,
    public age: U,
  ) {}
}

class Stack<T> {
  private count = 0;
  private elements: { [key: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;

    const element = this.elements[this.count];
    delete this.elements[this.count];

    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size(): number {
    return this.count;
  }

  show(): void {
    for (const key in this.elements) {
      console.log(`${key}: ${this.elements[key]}`);
    }
  }

  clean() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

console.log(stack);
console.log(stack.clean());
console.log(stack);
