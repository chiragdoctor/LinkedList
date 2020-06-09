class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
        const newNode = new Node(value);
        if(this.head) {
            const currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        } 
        this.head = newNode;
    }

    removeHead() {
        if(this.head) {
            this.head = this.head.next;
        }
    }
}

const sl = new SinglyLinkedList();
sl.addToHead(20)
sl.addToHead(10)
sl.removeHead();
console.log(sl)