class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const prevLast = this.last;
            prevLast.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }

    dequeue() {
        if (this.first === null) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
            this.first = null;
        } else {
            const nextInLine = this.first.next;
            this.first = nextInLine;
        }

        this.length--;
        return this;
    }
}

const myQueue = new Queue();
console.log(myQueue.enqueue('matt'));
console.log(myQueue.enqueue('tim'));
console.log(myQueue.enqueue('eric'));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue.dequeue());

