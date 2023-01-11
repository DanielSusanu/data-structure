const LinkedList = require('./LinkedList.js');

describe('#insertAtHead', () => {
  test('it adds the element to the beginning of the list', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe('#insertAtIndex', () => {
  describe('with index less than 0', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 40);
      expect(ll.length).toBe(2);
    });
  });
  describe('with index greater than length', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 40);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index 0', () => {
    test('it inserts at the head', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 40);
      expect(ll.head.value).toBe(40);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe('with index in the list', () => {
    test('it inserts at the specified index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const node = ll.getByIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});

describe('#insertAtEnd', () => {
  describe('with list length 0', () => {
    test('it inserts at head', () => {
      const ll = new LinkedList();
      ll.insertAtEnd(10);
      expect(ll.head.value).toBe(10);
      expect(ll.length).toBe(1);
    });
  });
  describe('with list length more that 0', () => {
    test('it inserts at end', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.insertAtEnd(40);
      const node = ll.getByIndex(3);

      expect(node.value).toBe(40);
      expect(node.next).toBe(null);
      expect(ll.length).toBe(4);
    });
  });
});

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);
      expect(ll.getByIndex(-1)).toBe(null);
    });
  });
  describe('with index greater than length', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      expect(ll.getByIndex(5)).toBe(null);
    });
  });

  describe('with index 0', () => {
    test('it returns the head', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe('with index in the list', () => {
    test('it returns value at tha index', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});

describe('#removeAtHead', () => {
  describe('with list length 0', () => {
    test('length should remain 0', () => {
      const ll = new LinkedList();
      ll.removeAtHead();
      expect(ll.head).toBe(null);
      expect(ll.length).toBe(0);
    });
  });
  describe('with list length of 1', () => {
    test('Length should be 0', () => {
      const ll = LinkedList.fromValues(10);
      ll.removeAtHead();
      expect(ll.length).toBe(0);
    });
    test('Head should be null', () => {
      const ll = LinkedList.fromValues(10);
      ll.removeAtHead();
      expect(ll.head).toBe(null);
    });
  });
  describe('with list length greater than 1', () => {
    test('Head should be item at index 1', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtHead();
      expect(ll.head.value).toBe(20);
    });
    test('Length should less by 1', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtHead();
      expect(ll.length).toBe(2);
    });
  });
});

describe('#removeAtIndex', () => {
  describe('With list length if 0', () => {
    test('length should be 0', () => {
      const ll = new LinkedList();
      ll.removeAtIndex(2);
      expect(ll.length).toBe(0);
    });
  });
  describe('with index less than 0', () => {
    test('it should not change the length', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(-1);
      expect(ll.length).toBe(3);
    });
  });
  describe('with index greater than length', () => {
    test('it should not change the length', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(5);
      expect(ll.length).toBe(3);
    });
  });
  describe('with index in range', () => {
    test('it should change the length', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(1);
      expect(ll.length).toBe(2);
    });
    test('index value should new next value', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(1);
      const node = ll.getByIndex(1);
      expect(node.value).toBe(30);
    });
  });
});

describe('#removeAtEnd', () => {
  describe('When list length is 0', () => {
    test('Then length should remain 0', () => {
      const ll = new LinkedList();
      ll.removeAtEnd();
      expect(ll.length).toBe(0);
    });
    test('Then head should remain null', () => {
      const ll = new LinkedList();
      ll.removeAtEnd();
      expect(ll.head).toBe(null);
    });
  });

  describe('When list length greater than 0', () => {
    test('Then length should be less by 1', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtEnd();
      expect(ll.length).toBe(2);
    });
    test('Then last item should be the previous', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtEnd();
      const node = ll.getByIndex(1);
      expect(node.value).toBe(20);
    });
    test('Then last item should point to null', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtEnd();
      const node = ll.getByIndex(1);
      expect(node.next).toBe(null);
    });
  });
});

describe('#containsValue', () => {
  describe('When list length is 0', () => {
    test('It should return false', () => {
      const ll = new LinkedList();
      const hasValue = ll.containsValue(10);
      expect(hasValue).toBe(false);
    });
    test('It should not change the length', () => {
      const ll = new LinkedList();
      ll.containsValue(10);
      expect(ll.length).toBe(0);
    });
  });

  describe('When List length is greater than 0 and not contains value', () => {
    test('It should return false', () => {
      const ll = LinkedList.fromValues(30, 40);
      const hasValue = ll.containsValue(10);
      expect(hasValue).toBe(false);
    });
    test('It should not change the length', () => {
      const ll = LinkedList.fromValues(30, 40);
      ll.containsValue(10);
      expect(ll.length).toBe(2);
    });
  });
  describe('When List length is greater than 0 and contains value', () => {
    test('It should return true', () => {
      const ll = LinkedList.fromValues(30, 40, 50);
      const hasValue = ll.containsValue(40);
      expect(hasValue).toBe(true);
    });
    test('It should not change the length', () => {
      const ll = LinkedList.fromValues(30, 40, 50);
      ll.containsValue(40);
      expect(ll.length).toBe(3);
    });
  });
});

describe('#indexOf', () => {
  describe('When list length is 0', () => {
    test('it should return -1', () => {
      const ll = new LinkedList();
      const index = ll.indexOf(10);
      expect(index).toBe(-1);
    });
    test('it should not change the length', () => {
      const ll = new LinkedList();
      const index = ll.indexOf(10);
      expect(ll.length).toBe(0);
    });
  });
  describe('when list length is greater than 0 and not contains value', () => {
    test('It should return -1', () => {
      const ll = LinkedList.fromValues(30, 40);
      const index = ll.indexOf(10);
      expect(index).toBe(-1);
    });
    test('It should not change the length', () => {
      const ll = LinkedList.fromValues(30, 40);
      const index = ll.indexOf(10);
      expect(ll.length).toBe(2);
    });
  });
  describe('when list length is greater than 0 and  contains value', () => {
    test('It should return index of value', () => {
      const ll = LinkedList.fromValues(30, 40, 50);
      const index = ll.indexOf(50);
      expect(index).toBe(2);
    });
    test('It should not change the length', () => {
      const ll = LinkedList.fromValues(30, 40, 50);
      const index = ll.indexOf(40);
      expect(ll.length).toBe(3);
    });
  });
});

// describe('#reverse')

// describe('#sort')
