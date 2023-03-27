class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
            prev: null,
        };

        this.tail = this.head;
        this.length = 1;
    };

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    };

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const prevIndexedNode = this.traverseToIndex(index);
        const newNode = new Node(value);
        const afterIndexedNode = prevIndexedNode.next;
        newNode.next = afterIndexedNode;
        newNode.prev = prevIndexedNode;
        prevIndexedNode.next = newNode;
        afterIndexedNode.prev = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (index >= this.length) {
            // traverse to the second to the last node
            const prevIndexedNode = this.traverseToIndex(this.length - 1);
            prevIndexedNode.next = null;
            this.tail = prevIndexedNode;
        } else if (index === 0) {
            this.head = this.head.next;
            this.head.next.prev = this.head;
        } else {
            const prevIndexedNode = this.traverseToIndex(index);
            prevIndexedNode.next = prevIndexedNode.next.next;
            prevIndexedNode.next.prev = prevIndexedNode;
        }
        this.length--;
        return this.printList();
    }

    traverseToIndex(index) {
        let currentNode = this.head;
        let counter = 0;

        while (counter !== index - 1) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }

    reverse () {
        if (!this.head.next) {
            return this;
        }

        let firstNode = this.head;
        let secondNode = firstNode.next;
        this.tail = this.head;

        while( secondNode) {
           const temp = secondNode.next;
           secondNode.next = firstNode;
           firstNode = secondNode;
           secondNode = temp;
        }

        this.head = firstNode;
        this.tail.next = null;

        return this;
    }

    reverse_old () {
        if (!this.head.next) {
            return this;
        }

        let currentNode = this.head;
        const reverseArray = [];

        while( currentNode !== null) {
            reverseArray.unshift(currentNode.value);
            currentNode = currentNode.next;
        }
        let node = this.head;

        let index = 0;
        while(node !== null){
            console.log('value: ', node.value)
            node.value = reverseArray[index];
            node = node.next;
            index++;
        }

        return this;
    }
}


const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(160);

myLinkedList.prepend(6);
myLinkedList.prepend(7);
myLinkedList.prepend(8);
myLinkedList.insert(1, 189);
myLinkedList.remove(2);
myLinkedList.remove(2);
console.log(myLinkedList.printList());

console.log(myLinkedList.reverse());
console.log('reversed: ', myLinkedList.printList());
