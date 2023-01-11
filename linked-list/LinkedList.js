class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }
  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, data) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.insertAtHead(data);

    let prevNode = this.getByIndex(index - 1);
    if (prevNode === null) return null;
    prevNode.next = new LinkedListNode(data, prevNode.next);
    this.length++;
  }

  insertAtEnd(data) {
    if (this.length === 0) return this.insertAtHead(data);
    let tail = this.getByIndex(this.length - 1);
    tail.next = new LinkedListNode(data, null);
    this.length++;
  }

  removeAtHead() {
    if (this.length === 0) return null;
    this.head = this.head.next;
    this.length--;
  }

  removeAtEnd() {
    if (this.length === 0) return null;
    if (this.length === 1) return this.removeAtHead();
    const prevNode = this.getByIndex(this.length - 2);
    prevNode.next = null;
    this.length--;
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.removeAtHead();

    let prevNode = this.getByIndex(index - 1);
    let currNode = prevNode.next;
    prevNode.next = currNode.next;

    this.length--;
  }

  containsValue(value) {
    if (this.length === 0) return false;
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  indexOf(value) {
    if (this.length === 0) return -1;
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  print() {
    let output = '';
    let current = this.head;
    while (current) {
      output += `${current.value}-->`;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = (...values) => {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
