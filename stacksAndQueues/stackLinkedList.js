class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
            // this.bottom = this.top;
        } else {
            const current = this.top;
            this.top = newNode;
            this.top.next = current;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        let currentTop = this.top;
        console.log('currentTop: ', currentTop);

        this.top = this.top.next;
        console.log('nextTop: ', this.top);

        this.length--;
        return this;
    }

    isEmpty() {
       return (this.length === 0);
    }
}

const myStack = new Stack();
myStack.push('google');
console.log(myStack.isEmpty());
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());
