class Queue {
  constructor() {
    this.items = new Map();
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items.set(this.headIndex, item);
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items.get(this.headIndex);
    this.items.delete(this.headIndex);
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items.get(this.headIndex);
  }
  getLength() {
    return this.items.size;
  }
}
