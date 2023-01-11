const LinkedList = require('./LinkedList.js');

const ll = new LinkedList();

ll.insertAtHead(30);
ll.insertAtHead(10);
ll.insertAtHead(20);

ll.print();
ll.removeAtIndex(0);

ll.print();
